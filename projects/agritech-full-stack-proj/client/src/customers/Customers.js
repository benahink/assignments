import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react';
import './Customers.css';

const Customers = () => (
    <div className="Customer_Card">
        <Card>
            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
            <Card.Content>
            <Card.Header>Willy</Card.Header>
            <Card.Meta>
                <span className='date'>Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
                Matthew is a musician living in Nashville.
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <a>
                <Icon name='user' />
                22 Friends
            </a>
            </Card.Content>
        </Card>

        <Card>
            <Image src='https://react.semantic-ui.com/images/avatar/large/patrick.png' wrapped ui={false} />
            <Card.Content>
            <Card.Header>Patick</Card.Header>
            <Card.Meta>
                <span className='date'>Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
                Matthew is a musician living in Nashville.
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <a>
                <Icon name='user' />
                22 Friends
            </a>
            </Card.Content>
        </Card>

        <Card>
            <Image src='https://react.semantic-ui.com/images/avatar/large/molly.png' wrapped ui={false} />
            <Card.Content>
            <Card.Header>Molly</Card.Header>
            <Card.Meta>
                <span className='date'>Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
                Matthew is a musician living in Nashville.
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <a>
                <Icon name='user' />
                22 Friends
            </a>
            </Card.Content>
        </Card>
    </div>
)

export default Customers;