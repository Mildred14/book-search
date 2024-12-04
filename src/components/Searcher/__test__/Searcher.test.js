import {render, screen} from '@testing-library/react'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { BrowserRouter } from 'react-router'
import { Searcher } from '../Searcher'

const queryClient = new QueryClient()

const MockSearcher = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Searcher info={()=>{}}/>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

describe("Searcher", () => {
  it('should render Searcher', () => {
    render(<MockSearcher/>)
    const formSearcher = screen.getByTestId('searcher-form')
    expect(formSearcher).toBeInTheDocument()
  })
})