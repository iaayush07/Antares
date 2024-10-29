import {
  Paper,
  Flex,
  Box,
  Title,
  Group,
  Text,
  ScrollArea,
} from "@mantine/core";
import PageToolbar from "../components/page-toolbar/PageToolbar";
import TableList from "../components/TableList";
import DealUpdate from "../components/DealUpdate";
// import { dealUpdateData } from "../../data";
// import { closingProgressData } from "../../data";
import { useState } from "react";
import { dealsData } from "../../data";

const TeamWorkItems = () => {
  const [activeStages, setActiveStages] = useState({});
  const handleActiveStage = (dealId, stageIndex) => {
    setActiveStages((prev) => ({
      ...prev,
      [dealId]: stageIndex,
    }));
  };
  const teamWorksAutoCompleteData = [
    "Signature Deal",
    "Cornerstone Contract",
    "Capital Accord",
    "Venture Accord",
    "Dividend Deal",
  ];

  return (
    <div style={{ padding: "20px" }}>
      <PageToolbar autoCompleteData={teamWorksAutoCompleteData} />
      {dealsData.map((deal) => {
        const activeStageIndex = activeStages[deal.id] || 0;
        const activeStage = deal.stages[activeStageIndex];
        const tasks = activeStage?.tasks || [];

        return (
          <Paper mb="md" withBorder key={deal.id}>
            <Group
              position="apart"
              gap={0}
              style={{ borderBottom: "1px solid #DEDFE2" }}
              wrap="nowrap"
            >
              <Flex direction="column" p="md">
                <Text size="sm" className="text-nowrap text-gray">
                  Deal Name
                </Text>
                <Title order={5} className="text-nowrap text-secondary">
                  {deal.name}
                </Title>
                <Text size="Sm" className="text-nowrap text-gray" mt="16px">
                  Deal Amount
                </Text>
                <Title order={5} className="text-nowrap text-secondary">
                  ${deal.amount}{" "}
                </Title>
              </Flex>
              <ScrollArea pr="16px">
                <Box
                  py="md"
                  style={{ borderLeft: "1px solid #DEDFE2" }}
                  display="flex"
                >
                  {deal.stages.map((stage, index) => (
                    <DealUpdate
                      key={index}
                      avatarUrl={stage.avatarUrl}
                      badgeText={stage.badgeText}
                      name={stage.name}
                      date={stage.date}
                      title={stage.title}
                      badgeBgColor={stage.badgeBgColor}
                      avatarBgColor={stage.avatarBgColor}
                      isActive={activeStageIndex === index}
                      onClick={() => handleActiveStage(deal.id, index)}
                      isLastChild={stage.isLastChild}
                      isInProgress={stage.isInProgress}
                    />
                  ))}
                </Box>
              </ScrollArea>
            </Group>
            {
              tasks?.length > 0 ? 
            <Box p="md">
              <Title mb="xs" order={5} className="text-secondary">
                Initiate Closing Process
              </Title>
              <TableList data={tasks} />
            </Box> : ''
            }
          </Paper>
        );
      })}
    </div>
  );
};

export default TeamWorkItems;
