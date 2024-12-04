import {fireEvent, render, screen} from '@testing-library/react'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { BrowserRouter } from 'react-router'
import { BookSearch } from '../BookSearch'

jest.mock("@tanstack/react-query", () => {
  const original = jest.requireActual("@tanstack/react-query");
  return {
    ...original,
    useQuery: jest.fn(),
  };
});

 const mockData = {
  items: [
    {
      volumeInfo: {
        title: "Mildred Book"
      }
    },
    {
      volumeInfo: {
        title: "Isay Book"
      }
    },
    {
      volumeInfo: {
        title: "Sofia Book"
      }
    },
  ]
}

const queryClient = new QueryClient()
const MockBookSearch = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <BookSearch info={()=>{}}/>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

describe("BookSearch", () => {
  afterEach(() => {
    jest.resetAllMocks()
  })

  it('should render BookSearch', async () => {
    useQuery.mockReturnValue({
      data: mockData,
      isPending: false
    })
    render(<MockBookSearch/>)

    const formSearcher = screen.getByTestId('searcher-form')
    const inputSearcher = screen.getByTestId('searcher-input')
    const buttonSearcher = screen.getByRole('button', {name: /Search Book/i})
    fireEvent.change(inputSearcher, {target: { value: "Book" }})
    fireEvent.click(buttonSearcher)

    const book1 = await screen.getByTestId('book-1')
    expect(formSearcher).toBeInTheDocument()
    expect(book1).toBeInTheDocument()
  })
})