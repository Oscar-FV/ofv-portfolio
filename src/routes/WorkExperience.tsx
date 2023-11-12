import { useState } from "react";
import Card from "../components/Card/Card";
import CardContent from "../components/Card/CardContent";
import CardTitle from "../components/Card/CardTitle";
import CardContainer from "../components/Card/CardContainer";
import CardFooter from "../components/Card/CardFooter";
import Button from "../components/Button.tsx/Button";

const WorkExperience = () => {
  const [isReadMore, setIsReadMore] = useState(false);

  const onReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <>
      <CardContainer>
        <Card className={`${isReadMore ? "h-[120%]" : "h-[90%]"}`}>
          <CardTitle title="FLEXTRONICS" />

          <CardContent text="Support for the flexLink application, with tasks in both backend and frontend. My work particularly focused on improving the UI of the application, as well as database cleaning tasks to enhance performance on the production server." />

          <CardFooter>
            <Button onClick={onReadMore} text="Read More..." />
          </CardFooter>
        </Card>
      </CardContainer>
    </>
  );
};

export default WorkExperience;
