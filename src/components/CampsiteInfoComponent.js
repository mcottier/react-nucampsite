import React from "react";
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem, Button, ButtonToggle, Modal } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control } from "react-redux-form";

function RenderCampsite({campsite}) {
        return (
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

function RenderComments({comments}){
        if (comments){

            return(
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                        {comments.map(comment => {
                            return (
                                <div key={comment.id}>
                                    <li>{comment.text} </li>,
                                    <p>-{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                </div>
                            );
    
                        })}
                    <CommentForm/> 
                
                </div>
            );
        }

        return(
            <div></div>
        );
    }
    
    function CampsiteInfo(props) {
        if (props.campsite) {
            return (
                    <div className="container">
                    <div className="row">
                        <div className="col">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                                <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                            </Breadcrumb>
                            <h2>{props.campsite.name}</h2>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <RenderCampsite campsite={props.campsite} />
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
            );
        }
        return <div />;
    }

    class CommentForm extends Component {
        contructor(props) {
            super(props);
            this.state = {
                isModalOpen: false
            };

            this.toggleModal = this.toggleModal.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this);
        }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
        handleSubmit(values){
            console.log((values))
                alert((values));
                this.toggleModal();

        }
        render() {
        return (
            <React.Fragment>
            <Button outline><i className="fa fa-pencil fa-lg"/>Submit Comment</Button>
            <Modal>
                <ModalHeader></ModalHeader>
                <ModalBody>
                    <ModalForm>
                        <div className="form-group">
                            <Control.select model=".rating" name="rating" className="form-control">
                                <option></option>
                                <option></option>
                                <option></option>
                                <option></option>
                                <option></option>
                            </Control.select>
                        </div>
                        <div className="form-group">
                            <Label htmlFor="author" md={10}>Author</Label>
                            <Control.text model=".author" id="author" name="author"></Control.text>
                            place
                        </div>
                    </ModalForm>
                </ModalBody>
            </Modal>
            </React.Fragment>
          );
        }
      }


export default CampsiteInfo;
