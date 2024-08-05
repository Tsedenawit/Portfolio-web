import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import images2 from "../Images/Image.png";
import images1 from "../Images/quiz.png";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };
export default function Port(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <div className="mt-[100px] mb-[50px] ">
       <h2 className="text-6xl ml-20 mt-40">My Portfolio</h2>
      <div className="flex justify-between mr-20 ml-20">
        <div className="max-w-[300px] min-h-[450px] rounded-md mt-20 shadow-2xl ">
          <img
            src={props.image}
            className="max-w-100 max-h-50 min-h-[50px] rounded-md"
          ></img>
            <div className="mt-3 pl-3">
            <Button onClick={handleOpen}>{props.name}</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Country quiz
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </Typography>
              </Box>
            </Modal>
          </div>
          <h2 className="mt-2 pl-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros.
          </h2>
          <button className="underline-offset-8 underline mt-4 pl-5">
           <a href="https://github.com/Tsedenawit/Quiz-main">View in Github</a> 
          </button>
        </div>
       
        
      </div>
    </div>
  );
}
