import { useEffect, useRef } from "react";
import Data from "../data/data";
import "../style/works.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Works = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("autoShow");
          } else {
            entry.target.classList.remove("autoShow");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  return (
    <div>
      <div className="card-container">
        {Data.map((item, index) => (
          <Card
            key={item.id}
            className="card"
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <CardMedia
              sx={{ height: 140 }}
              image={item.img}
              title={item.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.desc}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => window.open(item.url, "_blank")}
              >
                View Project
              </Button>
              <Button
                size="small"
                href="https://github.com/shnumtylmz/Patika.Dev-Front-End-Bootcamp"
              >
                GitHub Repo
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Works;
