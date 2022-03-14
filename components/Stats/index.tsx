import * as S from "./styles";

interface Props {
    children: string,
    statsNumber: string
    variant: "red" | "yellow" | "blue";
}

export const Stats = ({ children, statsNumber, variant }: Props) => {
    return (
        <>
            <S.StatsContainer variant={variant}>
                <S.TextContainer>
                    <p>{children}</p>
                    <span>{statsNumber}</span>
                </S.TextContainer>
            </S.StatsContainer>
        </>
    );
};
