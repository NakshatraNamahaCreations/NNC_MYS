"use client";

import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Define the shape of the card prop
interface BlogCardProps {
  card: {
    id?: string | number;
    title: string;
    description?: string;
    banner: string;
    date?: string | Date | null;
    link?: string;
  };
}

const BlogCard: React.FC<BlogCardProps> = ({ card }) => {
  const [refCard, inViewCard] = useInView({ triggerOnce: true, threshold: 0.2 });
  const router = useRouter();

  const cardSpring = useSpring({
    opacity: inViewCard ? 1 : 0,
    transform: inViewCard ? "scale(1)" : "scale(0.95)",
    config: { tension: 170, friction: 26 },
  });

  const handleNavigate = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (card.link) router.push(card.link);
  };

  return (
    <animated.div
      ref={refCard}
      style={{
        margin: "20px 0",
        padding: "10px",
        ...cardSpring,
      }}
      className="blogCard"
    >
      <Card
        className="h-100"
        style={{
          width: "100%",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
        }}
      >
        {/* Responsive Image */}
        <div style={{ position: "relative", width: "100%", height: "200px" }}>
          <Image
            src={card.banner}
            alt={card.title || "Blog Banner"}
            fill
            style={{
              objectFit: "cover",
            }}
            sizes="(max-width: 768px) 100vw, 320px"
          />
        </div>

        <Card.Body>
          <Card.Subtitle
            className="mb-2 text-muted"
            style={{ fontSize: "0.75rem" }}
          >
            {card.date
              ? typeof card.date === "string"
                ? card.date
                : card.date.toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })
              : ""}
          </Card.Subtitle>
          <Card.Text
            style={{
              fontSize: "0.9rem",
              fontWeight: 600,
              lineHeight: "1.4",
            }}
          >
            {card.title}
          </Card.Text>
        </Card.Body>

        <Card.Footer
          style={{
            textAlign: "right",
            backgroundColor: "transparent",
            borderTop: "none",
            paddingBottom: "10px",
            paddingRight: "10px",
          }}
        >
          <a
            href={card.link || "#"}
            onClick={handleNavigate}
            style={{
              textDecoration: "none",
              color: "#666",
              fontSize: "0.75rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "6px",
            }}
          >
            Read Blog
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </Card.Footer>
      </Card>

      {/* Responsive Styling */}
      <style jsx>{`
        @media (max-width: 576px) {
          .blogCard {
            padding: 5px;
          }

          .blogCard :global(.card-text) {
            font-size: 0.85rem;
          }

          .blogCard :global(.card-subtitle) {
            font-size: 0.7rem;
          }

          .blogCard a {
            font-size: 0.7rem !important;
          }
        }
      `}</style>
    </animated.div>
  );
};

export default BlogCard;
