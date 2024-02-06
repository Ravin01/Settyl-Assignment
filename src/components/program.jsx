import  { useState } from 'react';

import '../styles/Program.css'

const Program = () => {

  const [gridData, setGridData] = useState([
    { id: 1, department: 'CSE', program: 'Data Structure Lab', date: '2024-02-10' },
    { id: 2, department: 'EEE', program: 'Electrical Workshop', date: '2024-02-12' },
  ]);

  const [newRow, setNewRow] = useState({
    department: '',
    program: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRow(prevState => ({
      ...prevState,
      [name]: value
    }));
  };


  const addRow = () => {
    const newRowData = {
      id: gridData.length + 1,
      ...newRow
    };
    setGridData(prevData => [...prevData, newRowData]);
    setNewRow({
      department: '',
      program: '',
      date: '',
    })
  };

  return (
    <div className='program-container' >
      <select name="department" value={newRow.department} onChange={handleChange} className='program-input' >
        <option value="">--</option>
        <option value="ECE">ECE</option>
        <option value="EEE">EEE</option>
        <option value="CSE">CSE</option>
        <option value="Civil">Civil</option>
      </select>
      <input type="text" name="program" value={newRow.program} onChange={handleChange} placeholder="Program" className='program-input' />
      <input type="date" name="date" value={newRow.date} onChange={handleChange} className='program-input' />
      <button onClick={addRow}>Add Row</button>

      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Department</th>
            <th>Program</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {gridData.map(row => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.department}</td>
              <td>{row.program}</td>
              <td>{row.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Program;
