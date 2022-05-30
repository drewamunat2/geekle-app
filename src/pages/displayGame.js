import { List, Fab, withStyles } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import Search from "../components/Search";
import Game from "../components/Game";
import Header from "../components/Header";

const styles = {
  fab: {
    position: 'absolute',
    bottom: "2rem",
    right: "2rem",
  }
};

function DisplayGame() {
  return (
    <>
      <Search/>
    </>
  );
}

export default withStyles(styles)(DisplayGame);