import React, { Component } from 'react';
import './App.css';
import 'react-table/react-table.css';
import ReactTable from 'react-table';

class App extends Component {
    render() {
        const data = [{
            'albumId': 1,
            'id': 1,
            'title': 'accusamus beatae ad facilis cum similique qui sunt',
            'url': 'https://via.placeholder.com/600/92c952',
            'thumbnailUrl': 'https://via.placeholder.com/150/92c952'
        }];

        const columns = [{
            Header: 'Id',
            accessor: 'id'
        }, {
            Header: 'Album Id',
            accessor: 'albumId'
        }, {
            Header: 'Title',
            accessor: 'title'
        }, {
            Header: 'URL',
            accessor: 'url'
        }];

        return <ReactTable
            data={data}
            columns={columns}
        />;
    }
}

export default App;
