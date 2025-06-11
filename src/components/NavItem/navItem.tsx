import { type FC } from "react"
import Nav from 'react-bootstrap/Nav';

interface NavigationProps {
    path: string
    title: string
  }

const NavigationLink: FC<NavigationProps> = (props) => {
    return (
      <Nav.Link href={props.path}>{props.title}</Nav.Link>
    )
  }

const NavigationItem = <T extends NavigationProps>(Component: React.FC<T>) => {
    return (props: T) => {
      return (
        <Nav.Item>
          <Component {...props} />
        </Nav.Item>
      )
    }
  }
const BootstrapNavigationItem = NavigationItem(NavigationLink)
export default BootstrapNavigationItem