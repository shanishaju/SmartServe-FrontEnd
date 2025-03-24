import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { AddMenuApi } from '../services/allApi';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const [menuName, setMenuName] = useState('');
    const [itemFields, setItemFields] = useState([
        { itemName: '', price: '', description: '' }
    ]);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setMenuName('');
        setItemFields([{ itemName: '', price: '', description: '' }]);
    };

    const addMoreFields = () => {
        setItemFields([...itemFields, { itemName: '', price: '', description: '' }]);
    };

    const handleItemChange = (index, field, value) => {
        const updatedFields = [...itemFields];
        updatedFields[index][field] = value;
        setItemFields(updatedFields);
    };

    const handleSave = async () => {
        const menuData = {
            menuName: menuName,
            items: itemFields,
        };

        console.log("Data to be sent to backend:", menuData);

        try {
            const response = await AddMenuApi(menuData);
            console.log("Response from backend:", response.data);
        }
        catch (error) {
            console.log("Error adding menu:", error);
        }
        handleClose();

    };

    return (
        <nav className="px-16 py-8" style={{ backgroundColor: '#121618' }}>
            <div className="container mx-auto flex items-center justify-between">
                <h1 className="text-xl font-bold text-white"><span className='text-blue-400'>SMART</span> <span className='text-white'>SERVE</span></h1>

                <div className="hidden lg:flex gap-6 text-gray-300 font-bold text-sm">
                    <a href="/" className="hover:text-blue-400">HOME</a>
                    <a href="/" className="hover:text-blue-400">MENU</a>
                    <a href="/" className="hover:text-blue-400">MAKE A RESERVATION</a>
                    <React.Fragment>
                        <a href="#" className="hover:text-blue-400" onClick={handleClickOpen}>
                            ADD MENU
                        </a>

                        <Dialog
                            fullScreen={fullScreen}
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="responsive-dialog-title"
                            fullWidth
                            maxWidth="sm"
                        >
                            <DialogTitle id="responsive-dialog-title">
                                Add New Menu
                            </DialogTitle>
                            <DialogContent sx={{ maxHeight: '90vh', overflowY: 'auto' }}>
                                <DialogContentText>
                                    Please enter the menu and item details.
                                </DialogContentText>

                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="menuName"
                                    label="Menu Name"
                                    type="text"
                                    fullWidth
                                    variant="outlined"
                                    size="small"
                                    placeholder="Enter menu name"
                                    value={menuName}
                                    onChange={(e) => setMenuName(e.target.value)}
                                />

                                <h3 className="mt-6 mb-2 text-lg font-semibold">Item Details</h3>

                                {itemFields.map((item, index) => (
                                    <div key={index} className="flex flex-col gap-3 mb-3 sm:flex-row">
                                        <TextField
                                            margin="dense"
                                            label="Item Name"
                                            type="text"
                                            variant="outlined"
                                            size="small"
                                            placeholder="Enter item name"
                                            fullWidth
                                            value={item.itemName}
                                            onChange={(e) =>
                                                handleItemChange(index, 'itemName', e.target.value)
                                            }
                                        />
                                        <TextField
                                            margin="dense"
                                            label="Price"
                                            type="number"
                                            variant="outlined"
                                            size="small"
                                            placeholder="Enter price"
                                            fullWidth
                                            value={item.price}
                                            onChange={(e) =>
                                                handleItemChange(index, 'price', e.target.value)
                                            }
                                        />
                                        <TextField
                                            margin="dense"
                                            label="Description"
                                            type="text"
                                            variant="outlined"
                                            size="small"
                                            placeholder="Enter description"
                                            fullWidth
                                            value={item.description}
                                            onChange={(e) =>
                                                handleItemChange(index, 'description', e.target.value)
                                            }
                                        />
                                    </div>
                                ))}

                                <div className="flex justify-end mt-4">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={addMoreFields}
                                    >
                                        +
                                    </Button>
                                </div>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button variant="contained" onClick={handleSave}>Save</Button>
                            </DialogActions>
                        </Dialog>

                    </React.Fragment>
                    <a href="/contact" className="hover:text-blue-400">CONTACT-US</a>
                </div>

                <div className="lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-300 hover:text-blue-400 text-2xl"
                    >
                        ☰
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="lg:hidden flex flex-col gap-4 mt-3 px-6 text-gray-300 text-sm">
                    <a href="/" className="hover:text-blue-400">HOME</a>
                    <a href="/" className="hover:text-blue-400">MENU</a>
                    <a href="/" className="hover:text-blue-400">MAKE A RESERVATION</a>
                    <a href="#" onClick={handleClickOpen} className="hover:text-blue-400">ADD MENU</a>
                    <a href="/contact" className="hover:text-blue-400">CONTACT-US</a>
                </div>
            )}
        </nav>
    );
}

export default Nav;
