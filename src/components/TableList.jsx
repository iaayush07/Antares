import { Table, Paper, Text, Select, Image, Flex } from "@mantine/core";
import DownArrowIcon from "../assets/icons/down-arrow.svg";
import LockedIcon from "../assets/icons/locked.svg";
const TableList = ({ data }) => {
  const thList = [
    "Task No",
    "Task / Deliverable",
    "Deal Team Member",
    "Status",
    "Personnel",
    "files",
    "Target Date",
    "last update on",
  ];
  const getStatusStyle = (status) => {
    switch (status) {
      case "Completed":
        return {
          backgroundColor: "#e0f7ff",
          color: "#007bff",
        };
      case "In Progress":
        return {
          backgroundColor: "#e0ffe0",
          color: "#28a745",
        };
      case "Not Started":
        return {
          backgroundColor: "#f0f0f0",
          color: "#6c757d",
        };
      default:
        return {};
    }
  };
  const rows = data.map((task) => (
    <Table.Tr
      key={task.id}
      className="text-secondary"
      style={{ fontWeight: "500" }}
    >
      <Table.Td style={{ borderRight: "1px solid #ddd" }}>
        {task.taskNo}
      </Table.Td>
      <Table.Td style={{ borderRight: "1px solid #ddd" }}>
        <Flex justify="space-between">
          <Text>{task.taskName}</Text>
          {task.isLock ? <Image src={LockedIcon} w="20px" h="20px" ml="10px" /> : '' }
        </Flex>
      </Table.Td>
      <Table.Td style={{ borderRight: "1px solid #ddd" }}>
        <Select
          placeholder="Select deal team member"
          data={[
            "Duane Burton",
            "Matthew Melo",
            "Gerardo Minton",
            "Helen Baxter",
          ]}
          rightSection={<Image src={DownArrowIcon} h="6px" />}
          defaultValue={task.dealTeamMember}
          fw="500"
        />
      </Table.Td>
      <Table.Td style={{ borderRight: "1px solid #ddd" }}>
        <Text color={task.taskStatus === "Completed" ? "green" : "yellow"}>
          <div style={getStatusStyle(task.taskStatus)}>
            <Select
              placeholder="Select Status"
              data={["In Progress", "Completed", "Not Started"]}
              rightSection={<Image src={DownArrowIcon} h="6px" />}
              defaultValue={task.taskStatus}
              fw="500"
            />
          </div>
        </Text>
      </Table.Td>
      <Table.Td style={{ borderRight: "1px solid #ddd" }}>
        {task.personnel}
      </Table.Td>
      <Table.Td style={{ borderRight: "1px solid #ddd" }}>
        {task.fileType.length > 0 ? task.fileType.join(", ") : "N/A"}
      </Table.Td>
      <Table.Td style={{ borderRight: "1px solid #ddd" }}>
        {task.targetDate}
      </Table.Td>
      <Table.Td>{task.lastUpdated}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Paper withBorder>
      <Table stickyHeader stickyHeaderOffset={60}>
        <Table.Thead
          py="sm"
          style={{ background: "#ECEDF0", textTransform: "capitalize" }}
          className="text-gray"
        >
          <Table.Tr>
            {thList.map((th, index) => (
              <Table.Th key={index} style={{ borderRight: "1px solid #ddd" }}>
                {th}
              </Table.Th>
            ))}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Paper>
  );
};

export default TableList;
