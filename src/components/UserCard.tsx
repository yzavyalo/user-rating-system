import { PureComponent } from "react";
import { Avatar } from "@rneui/themed";
import { User } from "../model/types";

interface IUserCardProps {
    user: User
}

export class UserCard extends PureComponent<IUserCardProps> {

  public render() {
    return (
        <>
            <td>
                <input type="text"
                value={this.props.user.first_name || ""}
                onChange={(e) =>{}}
                />
            </td>
            <Avatar
                size={64}
                rounded
                source={{ uri: this.props.user.avatar }}
                title="Bj"
                containerStyle={{ backgroundColor: 'grey' }}
            /> 
        </>
    )
  }
}