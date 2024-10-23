// src/pages/MyWorkItems.js
import { Table, Badge, Avatar, Group, Text, Container } from '@mantine/core';
import { useSelector } from 'react-redux';

function MyWorkItems() {
  const myWorkItems = useSelector((state) => state.workItems.myWorkItems);

  const rows = myWorkItems.map((item) => (
    <tr key={item.taskNo}>
      <td>{item.taskNo}</td>
      <td>{item.task}</td>
      <td>
        <Badge color={item.status === 'Completed' ? 'green' : item.status === 'In Progress' ? 'yellow' : 'red'}>
          {item.status}
        </Badge>
      </td>
      <td>
        <Group spacing="sm">
          <Avatar src={item.avatar} size={30} />
          <Text>{item.assignedTo}</Text>
        </Group>
      </td>
      <td>{item.date}</td>
    </tr>
  ));

  return (
    <Container>
      <h1>My Work Items</h1>
      <Table striped highlightOnHover>
        <thead>
          <tr>
            <th>Task No</th>
            <th>Task / Deliverable</th>
            <th>Status</th>
            <th>Assigned To</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Container>
  );
}

export default MyWorkItems;
