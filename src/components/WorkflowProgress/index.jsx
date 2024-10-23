import { Group, Paper, Text, ThemeIcon } from '@mantine/core';

const WorkflowProgress = ({ stages }) => {
  return (
    <Paper p="md" radius="md" withBorder>
      <Group position="apart">
        {stages.map((stage, index) => (
          <div key={stage.id} style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <ThemeIcon
                size="xl"
                radius="xl"
                color={stage.completed ? 'blue' : 'gray'}
              >
                {stage.count}
              </ThemeIcon>
              <Text size="xs" mt={4}>
                {stage.name}
              </Text>
              <Text size="xs" color="dimmed">
                {stage.date}
              </Text>
            </div>
            {index < stages.length - 1 && (
              <div
                style={{
                  height: 2,
                  width: 50,
                  backgroundColor: '#e9ecef',
                  margin: '0 10px',
                }}
              />
            )}
          </div>
        ))}
      </Group>
    </Paper>
  );
};

export default WorkflowProgress;