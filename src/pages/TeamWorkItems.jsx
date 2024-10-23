// src/pages/TeamWorkItems.js
import { Table, Badge, Avatar, Group, Text } from "@mantine/core";
import { useSelector } from "react-redux";
import PageToolbar from "../components/page-toolbar/PageToolbar";

const TeamWorkItems=()=> {
  const teamWorkItems = useSelector((state) => state.workItems.teamWorkItems);

  const rows = teamWorkItems.map((item) => (
    <tr key={item.taskNo}>
      <td>{item.taskNo}</td>
      <td>{item.task}</td>
      <td>
        <Badge
          color={
            item.status === "Completed"
              ? "green"
              : item.status === "In Progress"
              ? "yellow"
              : "red"
          }
        >
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
    <div style={{ padding: "20px" }}>
      <PageToolbar/>
      {/* <Table striped highlightOnHover>
        <thead>
          <tr>
            <th>Task No</th>
            <th>Task / Deliverable</th>
            <th>Status</th>
            <th>Assigned To</th>
            <th>Date</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table> */}
    </div>
  );
}

export default TeamWorkItems;
