import AppsLauncherIcon from "./AppsLauncherIcon";
import Avatar from "./Avatar";
import MenuItem from "./MenuItem";

const Header = () => {
    return (
        <div style={{display: "flex", justifyContent: "flex-end", padding: "8px"}}>
            <div style={{display: "flex", gap: "4px"}}>
                <MenuItem title={"Gmail"} />
                {/* props.title = "Gmail" */}
                <MenuItem title={"Images"} />
                <AppsLauncherIcon />
                <Avatar />
            </div>
        </div>
    )
}
export default Header;