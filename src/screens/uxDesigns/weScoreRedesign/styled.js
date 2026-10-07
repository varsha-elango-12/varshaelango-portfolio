import React from "react";
import styled from "styled-components";

export const QuoteCard = ({
  items = [],
  variant = "default",
  gap = 16,
  color,
  padding = "16px",
}) => {
  return (
    <QuoteCardContainer $variant={variant} $color={color} $padding={padding}>
      {items.map((item, index) => (
        <QuoteRow
          key={index}
          $imagePosition={item.imagePosition || "left"}
          $gap={item.gap || gap}
        >
          {item.image && item.imagePosition === "left" && (
            <QuoteImage src={item.image} alt="" $size={item.imageSize || 54} />
          )}

          <QuoteContent
            $align={
              item.align || (item.imagePosition === "right" ? "right" : "left")
            }
          >
            <QuoteText>{item.quote}</QuoteText>

            {item.author && (
              <QuoteAuthor>
                {Array.isArray(item.author)
                  ? item.author.map((author, index) => (
                      <React.Fragment key={index}>
                        {index > 0 && <br />}
                        {author}
                      </React.Fragment>
                    ))
                  : item.author}
              </QuoteAuthor>
            )}
          </QuoteContent>

          {item.image && item.imagePosition === "right" && (
            <QuoteImage src={item.image} alt="" $size={item.imageSize || 54} />
          )}
        </QuoteRow>
      ))}
    </QuoteCardContainer>
  );
};

const QuoteCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 100%;
  box-sizing: border-box;

  padding: ${({ $padding }) => 
    typeof $padding === "number" ? `${$padding}px` : $padding || "16px"};
  margin: 12px 0 12px 0;

  background: ${({ $color }) =>
    $color || "linear-gradient(90deg, #FFFFFF 0%, #E5FFE3 100%)"};
  border-radius: 8px;

  gap: ${({ $variant }) => ($variant === "compact" ? "0px" : "16px")};
`;

const QuoteRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  min-width: 0;
  gap: ${({ $gap }) => `${$gap}px`};
`;

const QuoteContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  flex: 1;
  min-width: 0;

  gap: 8px;

  text-align: ${({ $align }) => $align};

  align-items: ${({ $align }) =>
    $align === "right" ? "flex-end" : "flex-start"};
`;

const QuoteText = styled.div`
  width: 100%;

  font-family: "Shantell Sans", sans-serif;
  font-weight: 400;
  font-size: clamp(14px, 0.84vw, 18px);
  line-height: 1;
  letter-spacing: -0.02em;

  color: #1a1a1a;
`;

const QuoteAuthor = styled.div`
  width: 100%;

  font-family: "PEL";
  font-size: clamp(13px, 0.84vw, 17px);
  line-height: 1.2;
  letter-spacing: -0.02em;

  color: #1a1a1a;
`;

const QuoteImage = styled.img`
  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size}px`};

  max-width: 100%;
  flex: none;

  object-fit: contain;
  display: block;
`;

export const InsightCardContainer = styled.div`
  width: ${({ $cardWidth }) => $cardWidth};
  max-width: 100%;
  display: flex;
  align-items: flex-start;
  position: relative;

  ${({ $sideNotePosition, $hasExtraSideNote }) =>
    !$hasExtraSideNote &&
    $sideNotePosition === "right" &&
    `
      justify-content: flex-start;
    `}

  ${({ $sideNotePosition, $hasExtraSideNote }) =>
    !$hasExtraSideNote &&
    $sideNotePosition === "left" &&
    `
      justify-content: flex-end;
    `}
`;

export const InsightMain = styled.div`
  flex: 520;
  min-width: 0;
  box-sizing: border-box;

  padding: 16px 24px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;

  position: relative;
  z-index: 0;

  background: ${({ $color }) => $color || "#d3e0be"};

  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);

  border-radius: ${({ $sideNotePosition, $hasSideNote }) => {
    if (!$hasSideNote) {
      return "8px";
    }

    return $sideNotePosition === "left" ? "0 8px 8px 8px" : "8px 0 8px 8px";
  }};

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px;
    gap: 12px;
  }
`;

export const InsightHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 8px;
`;
export const InsightTitle = styled.div`
  width: 100%;
  font-family: "PSB";
  font-size: clamp(16px, 1.05vw, 20px);
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #1a1a1a;
`;
export const InsightDescription = styled.div`
  width: 100%;
  font-family: "PL";
  font-size: clamp(14px, 0.84vw, 22px);
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #1a1a1a;
`;
export const InsightBottomDescription = styled.div`
  width: 100%;
  font-family: "PL";
  font-size: clamp(14px, 0.84vw, 22px);
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #1a1a1a;
`;

export const SideNote = styled.div`
  flex: 200;
  min-width: 0;
  height: auto;
  box-sizing: border-box;

  padding: 16px 24px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background: ${({ $color }) => $color || "#fff9f3"};

  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);

  border-radius: ${({ $position, $hasExtraSideNote }) => {
    if ($position === "left") {
      return $hasExtraSideNote ? "0 0 0 8px" : "8px 0 0 8px";
    }

    return $hasExtraSideNote ? "0 0 8px 0" : "0 8px 8px 0";
  }};

  position: relative;
  z-index: ${({ $position }) => ($position === "left" ? 2 : 1)};
`;

export const SideNoteContent = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SideNoteTitle = styled.div`
  font-family: "PSB";
  font-size: clamp(14px, 0.84vw, 18px);
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #5c5e60;
`;

export const SideNoteBody = styled.div`
  font-family: "PR";
  font-size: clamp(14px, 0.84vw, 17px);
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #5c5e60;
`;

export const ExtraSideNote = styled.div`
  flex: 170;
  min-width: 0;
  height: auto;

  padding: 12px 24px;
  box-sizing: border-box;

  color: #505e66;
  font-family: "PM";
  font-size: clamp(14px, 0.84vw, 17px);
  line-height: 1.2;

  background: ${({ $color }) => $color || "#ffffff"};

  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);

  border-radius: ${({ $position }) =>
    $position === "left" ? "8px 0 0 8px" : "0 8px 8px 0"};

  position: relative;

  z-index: ${({ $position }) => ($position === "left" ? 3 : 1)};
`;

export const HookAttachmentContainer = styled.div`
  position: absolute;
  z-index: 10;

  display: flex;
  flex-direction: column;
  gap: 16px;

  ${({ $position, $target }) => {
    if ($target === "side") {
      return $position === "right"
        ? `
            left: 0;
            top: 50%;
            transform: translate(-50%, -50%);
          `
        : `
            right: 0;
            top: 50%;
            transform: translate(50%, -50%);
          `;
    }

    return $position === "right"
      ? `
          left: 0;
          top: 50%;
          transform: translate(-50%, -50%);
        `
      : `
          right: 0;
          top: 50%;
          transform: translate(50%, -50%);
        `;
  }}
`;

export const Hook = styled.div`
  width: 11.74px;
  height: 4.4px;
  flex: none;

  background: #505e66;
  opacity: 0.3;
  border-radius: 4px;
`;

export const QuoteMini = styled.div`
  width: 100%;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 8px 16px 8px 16px;
  margin: 12px 0 12px 0;
  gap: 24px;

  background: #f6ffe8;
  border-radius: 8px;
`;

export const QuoteMiniText = styled.div`
  flex: 1;
  min-width: 0;

  font-family: "Shantell Sans", sans-serif;
  font-weight: 400;
  font-size: clamp(14px, 0.84vw, 18px);
  letter-spacing: -0.02em;

  color: #1a1a1a;
`;

export const QuoteMiniImage = styled.img`
  width: 105px;
  height: 30px;
  flex: none;

  object-fit: contain;
  display: block;
`;

export const ScorePrinciplesContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  gap: 32px;

  box-sizing: border-box;

  @media (max-width: 1024px) {
    gap: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const ScorePrincipleCard = styled.div`
  flex: 1;
  min-width: 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 2%;
  gap: 8px;

  box-sizing: border-box;

  background: #ffffff;
  border-radius: 16px;
`;

export const ScorePrincipleTitle = styled.div`
  width: 100%;

  font-family: "Shantell Sans", sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 110%;
  letter-spacing: -0.02em;

  color: #000000;
`;

export const ScorePrincipleDescription = styled.div`
  width: 100%;

  font-family: "Shantell Sans", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 110%;
  letter-spacing: -0.02em;

  color: #000000;
`;

export const RatingHeader = styled.div`
  display: grid;
  grid-template-columns: 3fr 5fr;
  gap: 24px;

  width: 100%;
  align-items: center;

  font-family: "PSB";
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #1a1a1a;
`;

export const RatingRows = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  padding: 1% 0;
`;

export const RatingRow = styled.div`
  width: 100%;
  min-height: 24px;

  display: grid;
  grid-template-columns: 3fr 5fr;
  gap: 24px;

  align-items: center;

  padding: 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 8px;
  }
`;

export const RatingParticipant = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  font-family: "PR";
  line-height: 16px;
  letter-spacing: -0.02em;

  color: #1a1a1a;
`;

export const RatingParticipantIcon = styled.img`
  width: 24px;
  height: 24px;
  flex: none;

  object-fit: contain;
`;

export const RatingValue = styled.div`
  font-family: "PM";
  line-height: 14px;
  letter-spacing: -0.02em;

  color: ${({ $negative }) => ($negative ? "#DB0011" : "#017631")};
`;

export const RatingDivider = styled.div`
  width: 100%;
  height: 0;

  border-top: 0.5px solid #1a1a1a;
`;

export const RatingInsight = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const RatingTable = styled.div`
  width: 100%;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  gap: 8px;

  padding: 16px;

  border: 0.5px solid #1a1a1a;

  @media (max-width: 768px) {
    ${RatingHeader},
    ${RatingRow} {
      grid-template-columns: 1fr;
      gap: 8px;
    }

    ${RatingValue} {
      margin-left: 32px;
    }

    ${RatingInsight} {
      flex-direction: column;
      align-items: stretch;
    }
  }
`;

export const RatingQuote = styled.div`
  flex: 1;
  min-width: 0;

  display: flex;
  align-items: center;
  gap: 16px;

  padding: 16px;

  background: #e8e8e8;
  border-radius: 8px;
`;

export const RatingQuoteText = styled.div`
  font-family: "Shantell Sans", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.02em;

  color: #1a1a1a;
`;

export const RatingInsightText = styled.div`
  flex: 1;
  min-width: 0;

  font-family: "PM";
  line-height: 20px;
  letter-spacing: -0.02em;

  color: #1c201e;
`;
