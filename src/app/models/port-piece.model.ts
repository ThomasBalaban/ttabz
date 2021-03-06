import { PortPieceDisplayedImage } from './port-piece-displayedImage.model';
import { PortPieceTechUsed } from './port-piece-techused.model';

export class PortPiece {
    projectType: string;
    projectName: string;
    projectDesc: string;
    projectSite: string;
    showCase: string;
    featured: boolean;
    techUsed: PortPieceTechUsed[];
    displayedImage: PortPieceDisplayedImage[];
}
