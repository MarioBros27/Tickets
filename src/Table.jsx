
import React from 'react';
import Container from '@material-ui/core/Container';
import Header from './Header';
import Ticket from './Ticket';

function Table(){
    return(
        <Container maxWidth="lg">
        <Header></Header>
        <Ticket id="12345" state="In Progress" title="Comer burritos" requester="Varelin" assignee="Pedro"></Ticket>
        <Ticket id="12346" state="TODO" title="Comer chilaquiles rojos" requester="Venturin" assignee="Paco"></Ticket>
        <Ticket id="12347" state="Done" title="Comer dorinachos preparados" requester="Valerin" assignee="Pancho"></Ticket>
        <Ticket id="12348" state="TODO" title="Comer boneless" requester="Vanessina" assignee="Pincho"></Ticket>
        <Ticket id="12349" state="In Progress" title="Comer papas fritas con queso" requester="Vivianina" assignee="Popo"></Ticket>
        <Ticket id="12350" state="Done" title="Comer montados de asado para llevar" requester="Victorin" assignee="Pepo"></Ticket>
        

      </Container>
    )
}
export default Table;
