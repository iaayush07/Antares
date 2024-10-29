import { Table, Paper, Text, Select, Image, Flex } from "@mantine/core";
import DownArrowIcon from "../assets/icons/down-arrow.svg";
import LockedIcon from "../assets/icons/locked.svg";
import MediaFileIcon from "../assets/icons/media-file.svg";
import DocIcon from "../assets/icons/img-file.svg";
import SettingIcon from "../assets/icons/setting.svg";
import HandIcon from "../assets/icons/hand.svg";
import DragDropIcon from '../assets/icons/DragDrop.svg'
import ExcelFileIcon from "../assets/icons/sheet-file.svg";
import EmailIcon from '../assets/icons/email.svg'
const TableList = ({ data }) => {
  console.log(data);

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
  const getFileIcons = (fileTypes) => {
    return fileTypes.map((fileType, index) => {
      switch (fileType) {
        case "document":
          return (
            <Image key={index} src={MediaFileIcon} w="20px" h="20px" mx="5px" />
          );
        case "excel":
          return <Image key={index} src={DocIcon} w="20px" h="20px" mx="5px" />;
        case "media":
          return (
            <Image key={index} src={ExcelFileIcon} w="20px" h="20px" mx="5px" />
          );
        case "email":
          return (
            <Image key={index} src={EmailIcon} w="25px" h="15px" mx="5px" />
          );
        default:
          return null;
      }
    });
  };
  const rows = data.map((task) => (
    <Table.Tr
      key={task.id}
      className="text-secondary"
      border= "1px solid red"
      style={{ fontWeight: "500",
        background: task.isLock ? "rgba(216, 98, 92, 0.1)" : ''
       }}
    >
      <Table.Td style={{ borderRight: "1px solid #ddd" }}>
        <Flex align="center" justify="space-between">
          <Image src={DragDropIcon} alt="drag-drop" w="20px" h="20px" mr="10px"></Image>
          <Text className="text-nowrap">{task.taskNo}</Text>
        </Flex>
      </Table.Td>
      <Table.Td style={{ borderRight: "1px solid #ddd" }}>
        <Flex justify="space-between" align="center">
          <Flex align="center">
            <Image
              src={task.isSetting ? SettingIcon : HandIcon}
              alt="task_icon"
              w="20px"
              h="20px"
              me="10px"
            />
            <Text>{task.taskName}</Text>
          </Flex>
          {task.isLock && (
            <Image src={LockedIcon} w="20px" h="20px" ml="10px" />
          )}
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
            "Ronny Smith",
            "David Brown"
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
        {task.fileType?.length > 0 ? (
          <Flex justify="center">{getFileIcons(task.fileType)}</Flex>
        ) : (
          ""
        )}
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
