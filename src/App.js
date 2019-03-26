import React, { Component } from 'react';
import './App.css';
import 'react-table/react-table.css';
import ReactTable from 'react-table';
import InfoBar from './components/InfoBar';

class App extends Component {
    state = {
        // Will initially render an empty table
        data: [],
        selectedRow: undefined,
        selectedCol: undefined,
        columns: [{
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
        }]
    };

    async componentDidMount() {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const data = await response.json();

        this.setState({data});
    }

    isCellSelected(rowInfo, column) {
        return this.state.selectedRow
            && this.state.selectedCol
            && rowInfo.index === this.state.selectedRow.index
            && column.id === this.state.selectedCol.id;
    }

    render() {
        const getTdProps = (state, rowInfo, column) => {
            if (!rowInfo) {
                return {};
            }
            return {
                onClick: e => {
                    this.setState({selectedRow: rowInfo, selectedCol: column});
                },
                style: {
                    background: this.isCellSelected(rowInfo, column) ? 'grey' : 'white',
                }
            };
        };

        let selectedCellText;
        let imageUrl;

        if (this.state.selectedRow) {
            const colId = this.state.selectedCol.id;

            selectedCellText = this.state.selectedRow.row[colId];
            imageUrl = colId === 'url' ? selectedCellText : undefined;
        } else {
            selectedCellText = 'please select a table cell';
        }

        /*no way to show all records with this lib, so hopefully this is good enough*/
        return <div>
            <ReactTable
                data={this.state.data}
                columns={this.state.columns}
                pageSizeOptions={[10, 50, 5000]}
                defaultPageSize={10}
                getTdProps={getTdProps}
            />
            <InfoBar text={selectedCellText} imageUrl={imageUrl}/>
        </div>;
    }
}

export default App;
