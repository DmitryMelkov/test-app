import { observer } from 'mobx-react-lite';
import { Collapse } from 'antd';
import { usersStore } from '@/stores/usersStore';
import Text from '../../ui/Text';
import './UsersList.css';

const { Panel } = Collapse;

const UsersList = observer(() => {
  return (
    <div>
      {usersStore.loading ? (
        <Text>Loading users...</Text>
      ) : (
        <Collapse>
          <Panel header="Users" key="users">
            {usersStore.users.map((user) => (
              <div key={user.id}>
                <Text>
                  {user.name} - {user.email}
                </Text>
              </div>
            ))}
          </Panel>
        </Collapse>
      )}
    </div>
  );
});

export default UsersList;
