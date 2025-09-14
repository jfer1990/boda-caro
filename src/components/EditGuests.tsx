// PreguestsTable.tsx
import React, { useEffect, useState } from "react";
import { Table, Modal, Button, Input, Space, Tag, message } from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import { Edit } from "lucide-react";

interface PreGuest {
  _id: string;
  name: string;
  maxGuests: number;
  confirmed: boolean;
  companions: string[];
  family?: string;
  slug?: string;
}

const EditGuests: React.FC = () => {
  const [preguests, setPreguests] = useState<PreGuest[]>([]);
  const [selected, setSelected] = useState<PreGuest | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [companions, setCompanions] = useState<string[]>([]);
  const [newCompanion, setNewCompanion] = useState("");

  useEffect(() => {
    fetchPreguests();
  }, []);

  const fetchPreguests = async () => {
    try {
      const res = await fetch("/preGuests");
      if (!res.ok) throw new Error("Failed to fetch preguests");
      const data = await res.json();
      setPreguests(data);
    } catch (err) {
      console.error(err);
      message.error("Error fetching preguests");
    }
  };

  const openModal = (preguest: PreGuest) => {
    setSelected(preguest);
    setCompanions(preguest.companions || []);
    setModalVisible(true);
  };

  const handleSave = async () => {
    if (!selected) return;

    const updatedPreGuest = { ...selected, companions };
    try {
      const res = await fetch(`/preGuests/${selected._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedPreGuest),
      });

      if (!res.ok) throw new Error("Failed to update preguest");

      message.success("PreGuest updated successfully");
      fetchPreguests();
      setModalVisible(false);
    } catch (err) {
      console.error(err);
      message.error("Error updating preguest");
    }
  };

  const addCompanion = () => {
    if (newCompanion.trim()) {
      setCompanions([...companions, newCompanion.trim()]);
      setNewCompanion("");
    }
  };

  const deleteCompanion = (index: number) => {
    setCompanions(companions.filter((_, i) => i !== index));
  };

  const columns = [
    { title: "Nombre", dataIndex: "name", key: "name" },
    { 
      title: "# Acompañantes", 
      dataIndex: "companions", 
      key: "companions", 
      render: (c: string[]) => c.length 
    },
    { 
      title: "Confirmado", 
      dataIndex: "confirmed", 
      key: "confirmed", 
      render: (c: boolean) => c ? <Tag color="green">Sí</Tag> : <Tag color="red">No</Tag> 
    },
    { 
      title: "", 
      key: "action",
      render: (_: any, record: PreGuest) => (
        <Button icon={<PlusOutlined />} onClick={() => openModal(record)} />
      )
    }
  ];

  return (
    <>
      <Table rowKey="_id" dataSource={preguests} columns={columns} />

      <Modal
        title={selected?.name}
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        onOk={handleSave}
        okText="Guardar"
      >
        <h3>Acompañantes</h3>
        <Space direction="vertical" style={{ width: "100%" }}>
          {companions.map((c, idx) => (
            <Space key={idx} style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
              <Input 
                value={c} 
                onChange={(e) => {
                  const newList = [...companions];
                  newList[idx] = e.target.value;
                  setCompanions(newList);
                }} 
              />
              <Button danger icon={<DeleteOutlined />} onClick={() => deleteCompanion(idx)} />
            </Space>
          ))}
          <Space style={{ display: "flex", marginTop: 10 }}>
            <Input 
              placeholder="Nuevo acompañante" 
              value={newCompanion} 
              onChange={(e) => setNewCompanion(e.target.value)} 
            />
            <Button type="primary" icon={<PlusOutlined />} onClick={addCompanion}>Añadir</Button>
          </Space>
        </Space>
      </Modal>
    </>
  );
};

export default EditGuests;
