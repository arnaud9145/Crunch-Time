import React from 'react'
import { Table, Icon } from 'antd'
import { DragDropContext, DragSource, DropTarget } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

let dragingIndex = -1

class BodyRow extends React.Component {
  render() {
    const {
      isOver,
      connectDragSource,
      connectDropTarget,
      moveRow,
      ...restProps
    } = this.props
    const style = { ...restProps.style, cursor: 'move' }

    let className = restProps.className
    if (isOver) {
      if (restProps.index > dragingIndex) {
        className += ' drop-over-downward'
      }
      if (restProps.index < dragingIndex) {
        className += ' drop-over-upward'
      }
    }

    return connectDragSource(
      connectDropTarget(
        <tr {...restProps} className={className} style={style} />
      )
    )
  }
}

const rowSource = {
  beginDrag(props) {
    dragingIndex = props.index
    return {
      index: props.index
    }
  }
}

const rowTarget = {
  drop(props, monitor) {
    const dragIndex = monitor.getItem().index
    const hoverIndex = props.index

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return
    }

    // Time to actually perform the action
    props.moveRow(dragIndex, hoverIndex)

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex
  }
}

const DragableBodyRow = DropTarget('row', rowTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver()
}))(
  DragSource('row', rowSource, connect => ({
    connectDragSource: connect.dragSource()
  }))(BodyRow)
)

const columns = [
  {
    dataIndex: 'line',
    key: 'line'
  }
]

class DragSortingTable extends React.Component {

  components = {
    body: {
      row: DragableBodyRow
    }
  }
  
  render() {
    if (this.props.showResult && !columns.find(column => column.key === 'result')) {
      columns.push({
        dataIndex: 'result',
        key: 'result',
        render: correct => (
          <Icon
            type={correct ? 'check' : 'cross'}
            style={{ color: correct ? 'green' : 'red' }}
          />
        )
      })
    }
    return (
      <Table
        columns={columns}
        dataSource={this.props.lines}
        components={this.components}
        onRow={(record, index) => ({
          index,
          moveRow: this.props.updateLines
        })}
        showHeader={false}
        pagination={false}
      />
    )
  }
}

const Demo = DragDropContext(HTML5Backend)(DragSortingTable)
export default Demo
