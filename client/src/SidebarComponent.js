
import { Sidebar, Segment, Menu, Icon, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function SidebarComponent({children}) {
    return(
        <Sidebar.Pushable as={Segment}>
            <Sidebar
            as={Menu}
            icon='labeled'
            vertical
            visible
            width='thin'
            >
                <Menu.Item as='a'>
                    <Button color='violet' fluid as={Link} to="/homefeed">
                    <Icon link name='home' />
                    Home
                    </Button>
                </Menu.Item>
                <Menu.Item as='a'>
                    <Button color='violet' fluid as={Link} to="/explore">
                    <Icon name='world' />
                    Explore
                    </Button>
                </Menu.Item>
                <Menu.Item as='a'>
                    <Button color='violet' fluid as={Link} to="/profile">
                    <Icon name='user' />
                    Profile
                    </Button>
                </Menu.Item>
            </Sidebar>

            <Sidebar.Pusher>
                <Segment basic>
                    {children}
                </Segment>
            </Sidebar.Pusher>
        </Sidebar.Pushable>
    )
}

export default SidebarComponent
