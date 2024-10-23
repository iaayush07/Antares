import { useState } from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Text,
  Title,
  Paper,
  Group,
  TextInput,
  Button,
  Avatar,
  Center,
  Badge,
  Stack,
  Flex,
  Divider,
} from "@mantine/core";
import { DealProgressBar } from "../DealProgressBar";
import TableList from "../TableList";

const PageToolbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  // const deals = useSelector((state) => state.deals.deals);

  // const filteredDeals = deals.filter(deal =>
  //   deal.name.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  return (
    <Box>
      <Group justify="flex-end" mb="lg">
        <TextInput
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button variant="filled" radius="md" color="rgba(58, 76, 133, 1)">
          Activity Log
        </Button>
      </Group>

      {/* {filteredDeals.map((deal) => (
        <Paper key={deal.id} p="md" mb="md" withBorder>
          <Group position="apart" mb="md">
            <Box>
              <Text weight={500}>{deal.name}</Text>
              <Text size="sm" color="dimmed">${deal.amount.toLocaleString()}</Text>
            </Box>
          </Group>
          <DealProgressBar status={deal.status} /> */}
      {/* <TaskList tasks={deal.tasks} dealId={deal.id} /> */}

      {/* </Paper>
      ))} */}
      <Paper mb="md" withBorder>
        <Group position="apart" gap={0} style={{borderBottom: "1px solid #DEDFE2"}}>
          <Flex direction="column" p="md">
            <Text size="sm">Deal Name</Text>
            <Title order={5}>AEM Buyer, LLC</Title>
            <Text size="Sm">Deal Amount</Text>
            <Title order={5}>$1,00,000.00 </Title>
          </Flex>
          <Box p="md" style={{ borderLeft: "1px solid #DEDFE2" }}>
            <Flex>
              <Group>
                <Stack align="center" gap={0}>
                  <Center
                    style={{ width: 100, height: 100, position: "relative" }}
                  >
                    <Box
                      style={{
                        padding: "2px",
                        border: "2px solid blue",
                        borderRadius: "50%",
                      }}
                    >
                      <Avatar
                        radius="50%"
                        size={75}
                        style={{
                          backgroundColor: "rgba(58, 76, 133, 1)",
                          border: "2px solid white",
                        }}
                      >
                        <img
                          src="your-icon-url-here"
                          alt="Icon"
                          style={{ width: "50%", height: "50%" }}
                        />
                      </Avatar>
                    </Box>
                    <Badge
                      py="12px"
                      style={{
                        position: "absolute",
                        top: 10,
                        right: -10,
                        backgroundColor: "#6DA4E8",
                        fontSize: "12px",
                      }}
                      radius="lg"
                    >
                      8/10
                    </Badge>
                  </Center>
                  <Title order={6}>Initiate Closing Process</Title>
                </Stack>
              </Group>
              <Box style={{ display: "flex", flexDirection: "column" }}>
                {/* Upper section with name and date */}
                <Flex spacing={0} direction="column" align="flex-end">
                  <Text weight={500} size="sm">
                    John Smith
                  </Text>
                  <Text size="sm" color="blue" underline>
                    09.12.2024
                  </Text>
                </Flex>
                <Divider
                  style={{
                    marginTop: 8,
                    width: "130px",
                    height: 7,
                    backgroundColor: "rgba(58, 76, 133, 1)",
                    borderRadius: "8px",
                  }}
                />
              </Box>
            </Flex>
          </Box>
        </Group>
        <Box p="md">
          <Title mb="xs" order={5}>Initiate Closing Process</Title>
          <TableList/>
        </Box>
      </Paper>
    </Box>
  );
};
export default PageToolbar;
