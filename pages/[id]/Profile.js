import { useRouter } from 'next/router'
const Profile = ({id}) => {
    const router = useRouter()
  const { pid } = router.query

  return <p>Profile for: {pid}</p>
}
 
export default Profile;


