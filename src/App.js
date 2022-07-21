import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import { useState } from "react"
import AboutIconLink from './components/AboutIconLink'
import AboutPage from './pages/AboutPage'

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedBack = (id) => {
        if (window.confirm('Are you sure you want to delete?'))
        {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        // console.log(newFeedback)
        setFeedback([newFeedback, ...feedback])
    }

    return (
        <Router>
            <Header />
            <div className="container">
                
                <Routes>
                    <Route 
                        exact 
                        path='/' 
                        element={ <>
                            <FeedbackForm handleAdd={addFeedback} />
                            <FeedbackStats feedback={feedback} />
                            <FeedbackList feedback={feedback} handleDelete={deleteFeedBack} />
                        </>}>
                        
                    </Route>
                    <Route path='/about' element={<AboutPage />} />
                </Routes>
                <AboutIconLink />
            </div>
        </Router>
    )
}

export default App