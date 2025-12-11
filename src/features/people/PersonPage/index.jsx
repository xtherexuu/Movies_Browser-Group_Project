import { ImagePlaceholder } from "../../../common/ImagePlaceholder/styled";
import PlaceHolderIcon from "../../../images/placeholderActorIcon.svg?react";
import {
    StyledDataContainer,
    StyledDescriptionsDesktop,
    StyledDescriptionsMobile,
    StyledDetails,
    StyledDetailsSpan,
    StyledHeader,
    StyledPersonImage,
    StyledPersonPage
} from "./styled";

export const PersonPage = ({
    poster,
    name,
    birthDate,
    birthPlace,
    biography,
}) => {

    return (
        <StyledPersonPage>
            <StyledDataContainer>
                {poster !== "https://image.tmdb.org/t/p/w200/" ? (
                    <StyledPersonImage width={399} src={poster} alt="Selected actor" />
                ) : (
                    <ImagePlaceholder $personPage>
                        <PlaceHolderIcon />
                    </ImagePlaceholder>
                )}
                <div>
                    {name && <StyledHeader>{name}</StyledHeader>}
                    {birthDate && (
                        <StyledDetails>
                            <StyledDetailsSpan $desktop>Date of birth: </StyledDetailsSpan>
                            <StyledDetailsSpan $mobile>Birth: </StyledDetailsSpan>
                            {birthDate}
                        </StyledDetails>
                    )}
                    {birthPlace && (
                        <StyledDetails>
                            <StyledDetailsSpan>Place of birth: </StyledDetailsSpan>
                            {birthPlace}
                        </StyledDetails>
                    )}
                    {biography && (
                        <StyledDescriptionsDesktop>{biography}</StyledDescriptionsDesktop>
                    )}
                </div>
            </StyledDataContainer>
            {biography && (
                <StyledDescriptionsMobile>{biography}</StyledDescriptionsMobile>
            )}
        </StyledPersonPage>
    );
};