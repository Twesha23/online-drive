import React from 'react';
import {Card,Dropdown,Form,Button} from 'react-bootstrap';
import FolderImg from '../../assets/Folder.svg';
import FilePdf from '../../assets/File-pdf.svg';
import FilePpt from '../../assets/File-ppt.svg';
import FileText from '../../assets/File-text.svg';

class FolderContents extends React.Component{
    render(){
        let {folders,files,onFolderClick,onFileRename,numOfFolders,numOfFiles} = this.props;
        let folderList = folders.map((FolderName,i) => {    
            return ( 
                <div key={i} className="pointer fl ma2"> 
                <Card style={{ width: '12rem',padding:'5px' }}>
                    <Card.Img variant="top" src={FolderImg} onClick={() => onFolderClick(FolderName)} />
                    <Card.Body>
                    <span className="pointer b" onClick={() => onFolderClick(FolderName)}>{FolderName.name}</span>
                        <Dropdown className="fr ">
                            <Dropdown.Toggle split variant="primary" id="dropdown-split-basic"/>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Rename</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Duplicate</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Card.Body>
                </Card>
                </div>
            )
        }
        );
       
        let fileList = files.map((FileName,i) => {
            return ( 
                <div key={i} className="pointer fl ma2">
                 
                <Card style={{ width: '12rem',padding:'5px' }}>
                { FileName.extension==="ppt"? <Card.Img variant="top" src={FilePpt} /> :
                  FileName.extension==="pdf" ? <Card.Img variant="top" src={FilePdf} /> :
                  <Card.Img variant="top" src={FileText} />
                }                    
                    <Card.Body>
                        {FileName.extension}<br></br>
                        <b>{FileName.name}</b>
                        <Dropdown className="fr">
                            <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" />
                            <Dropdown.Menu>
                                <Dropdown.Item eventKey="1" href={onFileRename(FileName)} data-toggle="modal" data-target="#myModal">Rename</Dropdown.Item>
                                <div className="modal" id="myModal">
                                    <div className="modal-dialog">
                                        <div className="modal-content">

                                        <div className="modal-header">
                                            <h4 className="modal-title">Rename File</h4>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>

                                        <Form onSubmit={ e => onFileRename(FileName,e)}>
                                        <div className="modal-body">
                                        <Form.Group>
                                            <Form.Label>Name of the folder</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter folder name"
                                                required
                                            />
                                            </Form.Group>
                                        </div>

                                        
                                        <div className="modal-footer">
                                            <Button variant="danger" data-dismiss="modal">
                                            Cancel
                                            </Button>
                                            <Button variant="success" type="submit" data-dismiss="modal">
                                            Create Folder
                                            </Button>
                                        </div>
                                          
                                    </Form>
                                    </div>
                                    </div>
                                </div>
                                <Dropdown.Item eventKey="2"  href="#/action-2" >Delete</Dropdown.Item>
                                <Dropdown.Item eventKey="3" href="#/action-3">Duplicate</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Card.Body>
                </Card>
                </div>
            )
        }
        );
        return (
            <div className="pa2 cf">
                 <span className="pa2">{numOfFolders} Folders</span>
                <div className="pa2 cf">{folderList}</div>
                <br/>
                <span className="pa2">{numOfFiles} Files</span>
                <div className="pa2 cf">{fileList}</div>
            </div>
    
        );
    }
}

export default FolderContents;