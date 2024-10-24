import { useState } from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Group,
  TextInput,
  Button,
  Autocomplete,
  Image
} from "@mantine/core";
import SearchIcon from '../../assets/icons/search.svg'

const PageToolbar = ({autoCompleteData}) => {
  const [searchQuery, setSearchQuery] = useState("");
  // const deals = useSelector((state) => state.deals.deals);

  // const filteredDeals = deals.filter(deal =>
  //   deal.name.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  return (
    <Box>
      <Group justify="flex-end" mb="lg">
        <Autocomplete
          placeholder="Search"
          value={searchQuery}
          data={autoCompleteData}
          onChange={(e) => setSearchQuery(e.target.value)}
          leftSection={<Image src={SearchIcon} h="16px" />}
        />
        <Button variant="filled" radius="md" >
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
    </Box>
  );
};
export default PageToolbar;
