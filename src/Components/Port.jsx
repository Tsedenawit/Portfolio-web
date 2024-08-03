import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import images2 from "../Images/coffee.jpg";
import images1 from "../Images/quiz.png";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
export default function Port() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <div className="mt-[100px] mb-[50px] ">
      <h2 className="text-6xl ml-20">My Portfolio</h2>
      <div className="flex justify-between mr-20 ml-20">
        <div className="max-w-[300px] min-h-[450px] rounded-md mt-20 shadow-2xl ">
          <img
            src={images1}
            className="max-w-100 max-h-50 min-h-[50px] rounded-md"
          ></img>
          <h2 className="mt-3 pl-5">
            <b>Country quiz</b>
          </h2>
          <h2 className="mt-2 pl-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros.
          </h2>
          <button className="underline-offset-8 underline mt-4 pl-5">
            View in Github
          </button>
        </div>
        <div className="max-w-[300px] min-h-[450px] rounded-md mt-20 shadow-lg">
          <img src={images2} className="max-w-100 max-h-50 rounded-md"></img>
          <h2 className="mt-3">
            <b>Country quiz</b>
          </h2>
          <h2 className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros.
          </h2>
          <div>
            <Button className="underline-offset-8 underline mt-4 pl-5" onClick={handleOpen}>View in Github</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </Typography>
              </Box>
            </Modal>
          </div>
        </div>
        <div className="max-w-[300px] min-h-[450px] rounded-md mt-20 shadow-lg">
          <img src={images1} className="max-w-100 max-h-50 rounded-md"></img>
          <h2 className="mt-3">
            <b>Country quiz</b>
          </h2>
          <h2 className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros.
          </h2>
          <button className="underline-offset-8 underline mt-4 ml-5">
            View in Github
          </button>
        </div>
        <div className="max-w-[300px] min-h-[450px] rounded-md mt-20 shadow-2xl ">
          <img
            src={images1}
            className="max-w-100 max-h-50 min-h-[50px] rounded-md"
          ></img>
          <h2 className="mt-3 pl-5">
            <b>Country quiz</b>
          </h2>
          <h2 className="mt-2 pl-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros.
          </h2>
          <button className="underline-offset-8 underline mt-4 pl-5">
            View in Github
          </button>
        </div>
      </div>
    </div>
  );
}
