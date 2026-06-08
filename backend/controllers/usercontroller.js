import asynchandler from '../middleware/asynHandler.js';
import User from '../models/usermodel.js';

// @desc    Auth users & get token
// @route   POST /api/users/login
// @access  Public  
const authUser = asynchandler(async(req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email});
    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        });
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
});

// @desc    Register a new user
// @route   POST /api/users
// @access  Public  
const registerUser = asynchandler(async(req, res) => {
    res.send('Register user');
});

//@desc     logout user/clear cookie
//@route    POST /api/users/logout
//@access   Private
const logoutUser = asynchandler(async(req, res) => {
    res.send('Logout user');
});

// @desc    Get users profile
// @route   GET /api/users
// @access  Private/admin  
const getUserProfile = asynchandler(async(req, res) => {
    res.send('Get users profile');
});

// @desc    update user profile
// @route   PUT /api/users/profile
// @access  Private/admin 
const updateUserProfile = asynchandler(async(req, res) => {
    res.send('Update user profile');
});

// @desc    Get user
// @route   GET /api/users/:id
// @access  Private/admin 
const getUser = asynchandler(async(req, res) => {
    res.send('Get user');
});

// @desc    Delete user
// @route   Delete /api/users/:id
// @access  Private/admin 
const deleteUser = asynchandler(async(req, res) => {
    res.send('delete  user');
});

// @desc    Get user by id
// @route   GET /api/users/:id
// @access  Private/admin 
const getUserById = asynchandler(async(req, res) => {
    res.send('get user');
});

// @desc    upadate user
// @route   Put /api/users/:id
// @access  Private/admin 
const updateUser = asynchandler(async(req, res) => {
    res.send('Update user');
});

export { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile, getUser, deleteUser, getUserById, updateUser };