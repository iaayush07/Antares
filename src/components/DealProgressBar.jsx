import { Group, Paper, Text } from '@mantine/core';

const getStatusColor = (status) => {
  const colors = {
    completed: '#4CAF50',
    'in-progress': '#2196F3',
    'not-started': '#9E9E9E'
  };
  return colors[status] || colors['not-started'];
};

export const DealProgressBar = ({ status }) => {
  const steps = [
    { label: 'Initiate Closing Process', value: status.initiateClosing },
    { label: 'AML / KYC', value: status.amlKyc },
    { label: 'Antares Workflow', value: status.antaresWorkflow },
    { label: 'Miscellaneous', value: status.miscellaneous },
    { label: 'Key Deliverables', value: status.keyDeliverables },
    { label: 'Drafts', value: status.drafts },
    { label: 'Post-Closing Items', value: status.postClosing }
  ];

  return (
    <Group spacing="xs" grow>
      {steps.map((step, index) => (
        <Paper
          key={step.label}
          p="xs"
          sx={{
            backgroundColor: getStatusColor(step.value),
            position: 'relative'
          }}
        >
          <Text size="xs" align="center" color="white">
            {step.label}
          </Text>
          {index < steps.length - 1 && (
            <div
              style={{
                position: 'absolute',
                right: -10,
                top: '50%',
                transform: 'translateY(-50%)',
                width: 20,
                height: 2,
                backgroundColor: '#ddd',
                zIndex: 1
              }}
            />
          )}
        </Paper>
      ))}
    </Group>
  );
};