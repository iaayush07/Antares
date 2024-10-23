import { Table, Select, Badge } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { updateDealTask } from '../slice';

const TaskList = ({ tasks, dealId }) => {
  const dispatch = useDispatch();

  const handleStatusChange = (taskId, newStatus) => {
    dispatch(updateDealTask({ dealId, taskId, updates: { status: newStatus } }));
  };

  const teamMembers = [
    { value: 'duane', label: 'Duane Burton' },
    { value: 'helen', label: 'Helen Baxter' },
    { value: 'matthew', label: 'Matthew Melo' },
    { value: 'ronny', label: 'Ronny Smith' },
    { value: 'gerardo', label: 'Gerardo Minton' },
    { value: 'david', label: 'David Brown' }
  ];

  const statusOptions = [
    { value: 'not-started', label: 'Not Started' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'completed', label: 'Completed' }
  ];

  return (
    <Table>
      <thead>
        <tr>
          <th>Task No</th>
          <th>Task / Deliverable</th>
          <th>Deal Team Member</th>
          <th>Status</th>
          <th>Personnel</th>
          <th>Files</th>
          <th>Target Date</th>
          <th>Last Update On</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td>{task.number}</td>
            <td>{task.title}</td>
            <td>
              <Select
                value={task.assignee}
                data={teamMembers}
                onChange={(value) => {
                  if (value) {
                    dispatch(updateDealTask({ 
                      dealId, 
                      taskId: task.id, 
                      updates: { assignee: value } 
                    }));
                  }
                }}
              />
            </td>
            <td>
              <Select
                value={task.status}
                data={statusOptions}
                onChange={(value) => {
                  if (value) handleStatusChange(task.id, value);
                }}
              />
            </td>
            <td>{task.personnel}</td>
            <td>
              {task.files && (
                <Badge>{task.files}</Badge>
              )}
            </td>
            <td>{task.targetDate}</td>
            <td>{task.lastUpdate}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
export default TaskList;