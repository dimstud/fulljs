import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ErrorMessage from '../errorMessage';
import gotService from '../../services/gotService';

const RowBlock = ({left, right}) => {
    return (
        <Row>
            <Col md='6'>
                {left}
            </Col>
            <Col md='6'>
                {right}
            </Col>
        </Row>
    )
}

export default class characterPage extends Component {

    gotService = new gotService();

    state = {
        selectedChar: 130,
        error: false
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {

        if (this.state.error) {
            return <ErrorMessage/>
        }

        const itemList = (
            <ItemList 
                        onCharSelected={this.onCharSelected} 
                        getData={this.gotService.getAllCharacters}
                        renderItem={({name, gender}) => `${name} (${gender})`}/>
        )

        const charDetails = (
            <CharDetails charId={this.state.selectedChar}/>
        )

        return (
            <RowBlock left={itemList} right={charDetails}/>
        )
    }
}