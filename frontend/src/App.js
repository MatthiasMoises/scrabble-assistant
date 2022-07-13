import Layout from './hoc/Layout'
import ScrabbleAssistant from './containers/ScrabbleAssistant'

const App = () => {
  return (
    <div sx={{ textAlign: 'center' }}>
      <Layout>
        <ScrabbleAssistant />
      </Layout>
    </div>
  )
}

export default App
