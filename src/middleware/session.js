const session = (req,res,next) => {
    if(req.session.userLogin){
        return next()
    }
    return res.redirect('/users/login')
}

module.exports = session ;