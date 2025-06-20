import { useEffect, useState } from "react";
import axios from "../utils/axiosInstance"; // Axios instance with baseURL

interface AddMouRecord {
  id: number;
  institutional_name: string;
  address: string;
  recipient_name: string;
  institution_type: string;
  i_code: string;
  sex: string;
  email_add: string;
  contact_number: string;
  province: string;
  date_of_deployment: string;
  year_distributed_number: number;
}

function UsersDashboard() {
  const [data, setData] = useState<AddMouRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [newEntry, setNewEntry] = useState<Partial<AddMouRecord>>({});

  useEffect(() => {
    axios
      .get("/api/AddMou")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load AddMou records:", err);
        setLoading(false);
      });
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewEntry((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/AddMou", newEntry);
      alert("Institution added successfully!");
      setData([...data, res.data]);
      setNewEntry({});
    } catch (err) {
      console.error("Failed to add record:", err);
      alert("Error adding record.");
    }
  };

  if (loading) return <p>Loading AddMou records...</p>;

  return (
<div style={{ padding: "2rem" }}>
  <h2>Add New Institution</h2>
  <form onSubmit={handleSubmit} style={{ marginBottom: "2rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
    <input name="institutional_name" placeholder="Institutional Name" value={newEntry.institutional_name || ""} onChange={handleChange} required />
    <input name="address" placeholder="Address" value={newEntry.address || ""} onChange={handleChange} required />
    <input name="recipient_name" placeholder="Recipient Name" value={newEntry.recipient_name || ""} onChange={handleChange} />
    <input name="institution_type" placeholder="Institution Type" value={newEntry.institution_type || ""} onChange={handleChange} />
    <input name="i_code" placeholder="I-Code" value={newEntry.i_code || ""} onChange={handleChange} />
    <input name="sex" placeholder="Sex" value={newEntry.sex || ""} onChange={handleChange} />
    <input name="email_add" placeholder="Email" value={newEntry.email_add || ""} onChange={handleChange} required />
    <input name="contact_number" placeholder="Contact Number" value={newEntry.contact_number || ""} onChange={handleChange} />
    <input name="province" placeholder="Province" value={newEntry.province || ""} onChange={handleChange} />
    <input name="date_of_deployment" type="date" value={newEntry.date_of_deployment || ""} onChange={handleChange} required />
    <input name="year_distributed_number" type="number" value={newEntry.year_distributed_number || ""} onChange={handleChange} required />
    <button type="submit">Submit</button>
  </form>
</div>

  );
}

export default UsersDashboard;
