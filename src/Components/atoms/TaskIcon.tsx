import {
  BsFillCheckCircleFill,
  BsCalendarWeek,
  BsCupHotFill,
  BsAlarmFill,
  BsFillDashCircleFill,
} from "react-icons/bs";
import { TaskStatus } from "../../models";

type TaskIconProps = {
  status: TaskStatus;
};

export default function TaskIcon({ status }: TaskIconProps) {
  let icon;
  if (status === TaskStatus.Completed) icon = <BsFillCheckCircleFill />;
  else if (status === TaskStatus.ToDo) icon = <BsCalendarWeek />;
  else if (status === TaskStatus.InProgress) icon = <BsCupHotFill />;
  else if (status === TaskStatus.Paused) icon = <BsAlarmFill />;
  else icon = <BsFillDashCircleFill />;
  return icon;
}
