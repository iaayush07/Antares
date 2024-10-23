// src/pages/CapacityDashboard.js
import {
  Group,
  Paper,
  Text,
  SimpleGrid,
  Progress,
  RingProgress,
  Stack,
} from "@mantine/core";
import { useSelector } from "react-redux";

function CapacityDashboard() {
  const capacityData = useSelector((state) => state.workItems.capacityData);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Capacity Dashboard</h1>

      <SimpleGrid cols={2} spacing="lg">
        <Paper shadow="sm" padding="lg">
          <Text weight={500} size="lg" mb="md">
            Closing Overview
          </Text>
          <Group>
            Charts Goes here
            {/* <Stack>
              <Text>Angela</Text>
              <Progress value={capacityData.closers.Angela * 100} />
              <Text>Michael</Text>
              <Progress value={capacityData.closers.Michael * 100} />
            </Stack> */}
          </Group>
        </Paper>

        <Paper shadow="sm" padding="lg">
          <Text weight={500} size="lg" mb="md">
            Approver Efficiency
          </Text>
          <Group>
            Charts Goes here
            {/* <RingProgress
              label="Daphne"
              sections={[{ value: capacityData.approvers.Daphne * 100, color: 'blue' }]}
            />
            <RingProgress
              label="Emily"
              sections={[{ value: capacityData.approvers.Emily * 100, color: 'green' }]}
            /> */}
          </Group>
        </Paper>
      </SimpleGrid>
    </div>
  );
}

export default CapacityDashboard;
