// src/pages/TeamWorkItems.js
import {
  Paper,
  Flex,
  Box,
  Title,
  Badge,
  Avatar,
  Group,
  Text,
} from "@mantine/core";
import { useSelector } from "react-redux";
import PageToolbar from "../components/page-toolbar/PageToolbar";
import TableList from "../components/TableList";
import DealUpdate from "../components/DealUpdate";
import { dealUpdateData } from "../../data";
import { closingProgressData } from "../../data";

const TeamWorkItems = () => {
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
  const teamWorksAutoCompleteData = [
    'Signature Deal',
    'Cornerstone Contract',
    'Capital Accord',
    'Venture Accord',
    'Dividend Deal'
  ]

  return (
    <div style={{ padding: "20px" }}>
      <PageToolbar autoCompleteData={teamWorksAutoCompleteData} />
      <Paper mb="md" withBorder>
        <Group
          position="apart"
          gap={0}
          style={{ borderBottom: "1px solid #DEDFE2" }}
          wrap="nowrap"
        >
          <Flex direction="column" p="md">
            <Text size="sm" className="text-gray">
              Deal Name
            </Text>
            <Title order={5} className="text-secondary">
              AEM Buyer, LLC
            </Title>
            <Text size="Sm" className="text-gray">
              Deal Amount
            </Text>
            <Title order={5} className="text-secondary">
              $1,00,000.00{" "}
            </Title>
          </Flex>
          <Box py="md" style={{ borderLeft: "1px solid #DEDFE2" }} display="flex">
            {dealUpdateData.map((deal) => (
              <DealUpdate
                key={deal.id}
                avatarUrl={deal.avatarUrl}
                badgeText={deal.badgeText}
                name={deal.name}
                date={deal.date}
                title={deal.title}
                badgeBgColoe={deal.badgeBgColoe}
                avatarBgColor={deal.avatarBgColor}
              />
            ))}
          </Box>
        </Group>
        <Box p="md">
          <Title mb="xs" order={5} className="text-secondary">
            Initiate Closing Process
          </Title>
          <TableList data={closingProgressData} />
        </Box>
      </Paper>
    </div>
  );
};

export default TeamWorkItems;
