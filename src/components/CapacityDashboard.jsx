import { Box, Grid, Paper, Title, Table } from '@mantine/core';
// import { LineChart, XAxis, YAxis, CartesianGrid, Line, Tooltip } from 'recharts';

export const CapacityDashboard = () => {
  const closers = [
    { name: 'Angela', value: 0.00, deals: 0 },
    { name: 'Brooke', value: 0.00, deals: 0 },
    { name: 'Duyanna', value: 0.00, deals: 0 },
    { name: 'Joletta', value: 0.00, deals: 0 },
    { name: 'Michael', value: 0.00, deals: 0 },
    { name: 'Rosa', value: 0.00, deals: 0 },
    { name: 'Vicky', value: 0.00, deals: 0 }
  ];

  const approvers = [
    { name: 'Daphne', value: 0.00, deals: 0 },
    { name: 'Emily', value: 0.00, deals: 0 },
    { name: 'Morgan', value: 0.00, deals: 0 },
    { name: 'Duyanna', value: 0.00, deals: 0 }
  ];

  return (
    <Box p="md">
      <Grid>
        <Grid.Col span={6}>
          <Paper p="md" withBorder>
            <Title order={4}>Closing</Title>
            <Table>
              <thead>
                <tr>
                  <th>Closers</th>
                  <th>Value</th>
                  <th>Deals</th>
                </tr>
              </thead>
              <tbody>
                {closers.map((closer) => (
                  <tr key={closer.name}>
                    <td>{closer.name}</td>
                    <td>{closer.value.toFixed(2)}</td>
                    <td>{closer.deals}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Box mt="md">
              <Title> Charts Goes here </Title>
              {/* <LineChart width={500} height={300} data={closers}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
              </LineChart> */}
            </Box>
          </Paper>
        </Grid.Col>
        
        <Grid.Col span={6}>
          <Paper p="md" withBorder>
            <Title order={4}>Approvers</Title>
            <Table>
              <thead>
                <tr>
                  <th>Approvers</th>
                  <th>Value</th>
                  <th>Deals</th>
                </tr>
              </thead>
              <tbody>
                {approvers.map((approver) => (
                  <tr key={approver.name}>
                    <td>{approver.name}</td>
                    <td>{approver.value.toFixed(2)}</td>
                    <td>{approver.deals}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Box mt="md">
            <Title> Charts Goes here </Title>
              {/* <LineChart width={500} height={300} data={approvers}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#82ca9d" />
              </LineChart> */}
            </Box>
          </Paper>
        </Grid.Col>
      </Grid>
    </Box>
  );
};