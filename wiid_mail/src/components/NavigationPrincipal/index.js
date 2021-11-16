import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import useAuth from '../../hooks/useAuth';
import requestFetch from '../../Services/requestFetch';


const NavigationPrincipal = (props) => {
  const { tree, setChats, setSelecteds, setSelectedAll } = useAuth()
  const [expanded, setExpanded] = useState([]);
  const [selected, setSelected] = useState([]);

  const handleClickTreeItem = async ( id ) => {
    setSelectedAll(false)
    setSelecteds([])
    const link = `http://my-json-server.typicode.com/workinideas/vagafrontendteste/items/${id}`;
    await requestFetch(link, 'GET', setChats)
  };

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
  };

  const handleExpandClick = () => {
    const itensExpanded = [];
    for (let item of tree) {
      itensExpanded.push(item.id)
    }
    setExpanded((oldExpanded) =>
      oldExpanded.length === 0 ? itensExpanded : [],
    );
  };

  const handleSelectClick = () => {
    const itensSelected = [];
    for (let item of tree) {
      itensSelected.push(item.id);
      for (let subItem of item.subMenus) {
        itensSelected.push(subItem.id);
      }
    }
    setSelected((oldSelected) =>
      oldSelected.length === 0 ? itensSelected : [],
    );
  };
  return (
    <Box sx={{ height: 'calc(100% - 145px)', flexGrow: 1, width: '100%', overflowY: 'auto' }}>
      <Box sx={{ mb: 1 }}>
        <Button onClick={handleExpandClick}>
          {expanded.length === 0 ? 'Expand all' : 'Collapse all'}
        </Button>
        <Button onClick={handleSelectClick}>
          {selected.length === 0 ? 'Select all' : 'Unselect all'}
        </Button>
      </Box>
      <TreeView
        aria-label="controlled"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        expanded={expanded}
        selected={selected}
        onNodeToggle={handleToggle}
        onNodeSelect={handleSelect}
        multiSelect
      >
        {
          tree.map(item => {
            return (
              <TreeItem nodeId={item.id} label={item.name}>
                {
                  item.subMenus.map(SubItem => {
                    return (
                      <TreeItem nodeId={SubItem.id} label={SubItem.name} onClick={() => handleClickTreeItem(SubItem.id)} />
                    )
                  })
                }
              </TreeItem>
            )
          })
        }
      </TreeView>
    </Box>
  );
}

export default NavigationPrincipal;
