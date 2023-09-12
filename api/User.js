import jwt from 'jsonwebtoken';

export default function (req, res) {
    // get cookie from header with name user_token
    let user_token = req.headers.cookie.split(';').find(c => {
        return c.trim().startsWith('user_token=')
    });
    if(!user_token){
        return res.status(401).json({ message: 'Unauthenticated' });
    }    
    user_token = user_token.split('=')[1];
    
    // decode cookie and get user id
    const decoded = jwt.verify(user_token, 'secret');
    const userId = decoded.id;

    // find the user
    const user = users.find(u => u.id == userId);

    if (!user) {
        res.status(401).json({ message: 'Unauthenticated' });
    }

    // SEND USER BACK
    res.json({ user });
}