// self
import MdxLayout from "../components/mdx-layout"

const StyleGuideLayout = ({ children }) => (
  <MdxLayout
    location={{ pathname: "/style-guide/" }}
    _frontmatter={{ title: "Style Guide" }}
  >
    {children}
  </MdxLayout>
)

export default StyleGuideLayout
