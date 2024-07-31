import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { useCustomization } from '@/context/Customization';

export default function Overview() {
  const {
    model,
    freeStanding,
    standardType,
    profileColor,
    coveringMaterial,
    awning,
    fabricColor,
    leftWallType,
    leftWallMaterial,
    leftMaterialTransparency,
    leftAwning,
    leftAwningColor,
    leftWedgeMaterial,
    rightWallType,
    rightWallMaterial,
    rightMaterialTransparency,
    rightAwning,
    rightAwningColor,
    rightWedgeMaterial,
    frontWallType,
    frontLeftWallType,
    frontRightWallType,
    verticalAwningColor,
    frontMaterialTransparency,
    frontLeftMaterialTransparency,
    frontRightMaterialTransparency,
    // ledSet,
    width,
    height,
    depth,
  } = useCustomization();

  return (
    <div className="flex items-center justify-center">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">Stap</TableHead>
            <TableHead>Kenmerken</TableHead>
            <TableHead>Opties</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell
              rowSpan={model === 'standradVeranda' ? 3 : 2}
              className="font-medium"
            >
              Basisinformatie
            </TableCell>
            <TableCell>Model Type</TableCell>
            <TableCell>
              {model === 'standradVeranda'
                ? 'Standrad'
                : model === 'square'
                ? 'Vierkant'
                : 'Lattenbodem'}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Bouw Type</TableCell>
            <TableCell>
              {freeStanding ? 'Vrijstaand' : 'Wand Montage'}
            </TableCell>
          </TableRow>
          {model === 'standradVeranda' && (
            <TableRow>
              <TableCell>Gutter</TableCell>
              <TableCell className="capitalize">{standardType}</TableCell>
            </TableRow>
          )}
          <TableRow>
            <TableCell
              rowSpan={model === 'standradVeranda' ? 5 : 4}
              className="font-medium"
            >
              Bekleding
            </TableCell>
            <TableCell>Hoogte</TableCell>
            <TableCell>{height} cm</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Breedte</TableCell>
            <TableCell>{width} cm</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Diepte</TableCell>
            <TableCell>{depth} cm</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Profielkleur</TableCell>
            <TableCell>
              {profileColor === 'RAL7016'
                ? 'RAL 7016'
                : profileColor === 'RAL9001'
                ? 'RAL 9001'
                : 'RAL 9005'}
            </TableCell>
          </TableRow>
          {model === 'standradVeranda' && (
            <TableRow>
              <TableCell>Bekleding</TableCell>
              <TableCell>
                {coveringMaterial === 'glassClear'
                  ? '8 mm Helder'
                  : coveringMaterial === 'glassOpal'
                  ? '8 mm Opaal'
                  : coveringMaterial === 'Poly_Clear'
                  ? '16 mm Helder (Polycarbonaat)'
                  : '16 mm Opaal (Polycarbonaat)'}
              </TableCell>
            </TableRow>
          )}
          {!(model === 'slattedRoof') && (
            <>
              <TableRow>
                <TableCell
                  rowSpan={awning === 'roofAwning' ? 2 : 1}
                  className="font-medium"
                >
                  Zonwering
                </TableCell>
                <TableCell>
                  {awning === 'withoutAwning'
                    ? 'Zonder zonwering'
                    : 'Dakzonwering'}
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
              {awning === 'roofAwning' && (
                <TableRow>
                  <TableCell>Stofkleur</TableCell>
                  <TableCell className="capitalize">
                    {fabricColor === 'wit' ? 'Wit (White)' : fabricColor}
                  </TableCell>
                </TableRow>
              )}
            </>
          )}
          <TableRow>
            <TableCell className="font-medium" rowSpan={width <= 607 ? 3 : 4}>
              Uitbreidingen
            </TableCell>

            {leftWallType === 'notSpecified' ? (
              <>
                <TableCell>Type linker wand</TableCell>
                <TableCell>Niet gespecificeerd</TableCell>
              </>
            ) : (
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <TableCell>Type linker wand</TableCell>
                    <TableCell>
                      {leftWallType === 'fixedGlassWall'
                        ? 'Vaste glazen wand'
                        : leftWallType === 'slidingDoor'
                        ? 'Schuifdeur'
                        : leftWallType === 'aluminium'
                        ? 'Aluminium Wand'
                        : leftWallType === 'polycarbonate'
                        ? 'Polycarbonaat Wand'
                        : 'Vrom'}
                    </TableCell>
                  </AccordionTrigger>
                  <AccordionContent>
                    {(leftWallType === 'wedge' ||
                      leftWallType === 'fixedGlassWall' ||
                      leftWallType === 'slidingDoor') && (
                      <>
                        <TableRow>
                          <TableCell className="font-medium">
                            Materiaal
                          </TableCell>
                          <TableCell>{leftWallMaterial}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">
                            Transparantie
                          </TableCell>
                          <TableCell className="capitalize">
                            {leftMaterialTransparency}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">
                            Zonwering
                          </TableCell>
                          <TableCell>{leftAwning ? 'Yes' : 'No'}</TableCell>
                        </TableRow>
                        {leftAwning && (
                          <TableRow>
                            <TableCell className="font-medium">
                              Kleur verticale zonwering
                            </TableCell>
                            <TableCell className="capitalize">
                              {leftAwningColor}
                            </TableCell>
                          </TableRow>
                        )}
                      </>
                    )}
                    {(leftWallType === 'aluminium' ||
                      leftWallType === 'polycarbonate') && (
                      <>
                        <TableRow>
                          <TableCell className="font-medium">
                            Materiaal
                          </TableCell>
                          <TableCell>
                            {leftWallType === 'aluminium'
                              ? 'Aluminium'
                              : 'Polycarbonat'}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Vorm</TableCell>
                          <TableCell>
                            {leftWedgeMaterial ? 'Yes' : 'No'}
                          </TableCell>
                        </TableRow>
                        {leftWedgeMaterial && (
                          <>
                            <TableRow>
                              <TableCell className="font-medium">
                                Vrom Materiaal
                              </TableCell>
                              <TableCell>{leftWallMaterial}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">
                                Transparantie
                              </TableCell>
                              <TableCell className="capitalize">
                                {leftMaterialTransparency}
                              </TableCell>
                            </TableRow>
                          </>
                        )}

                        <TableRow>
                          <TableCell className="font-medium">
                            Zonwering
                          </TableCell>
                          <TableCell>{leftAwning ? 'Yes' : 'No'}</TableCell>
                        </TableRow>
                        {leftAwning && (
                          <TableRow>
                            <TableCell className="font-medium">
                              Kleur verticale zonwering
                            </TableCell>
                            <TableCell className="capitalize">
                              {leftAwningColor}
                            </TableCell>
                          </TableRow>
                        )}
                      </>
                    )}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            )}
          </TableRow>
          {width <= 607 && (
            <TableRow>
              {frontWallType === 'notSpecified' ? (
                <>
                  <TableCell>Type voorwand</TableCell>
                  <TableCell>Niet gespecificeerd</TableCell>
                </>
              ) : (
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      <TableCell>Type voorwand</TableCell>
                      <TableCell>
                        {frontWallType === 'fixedGlassWall'
                          ? 'Vaste glazen wand'
                          : frontWallType === 'slidingDoor'
                          ? 'Schuifdeur'
                          : 'Verticale zonwering'}
                      </TableCell>
                    </AccordionTrigger>
                    <AccordionContent>
                      {frontWallType === 'awning' ? (
                        <>
                          <TableRow>
                            <TableCell className="font-medium">
                              Materiaal
                            </TableCell>
                            <TableCell>Verticale zonwering</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">
                              Kleur zonwering
                            </TableCell>
                            <TableCell className="capitalize">
                              {verticalAwningColor}
                            </TableCell>
                          </TableRow>
                        </>
                      ) : (
                        <>
                          <TableRow>
                            <TableCell className="font-medium">
                              Materiaal
                            </TableCell>
                            <TableCell>Glass</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">
                              Transparantie
                            </TableCell>
                            <TableCell className="capitalize">
                              {frontMaterialTransparency}
                            </TableCell>
                          </TableRow>
                        </>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              )}
            </TableRow>
          )}
          {!(width <= 607) && (
            <TableRow>
              {frontLeftWallType === 'notSpecified' ? (
                <>
                  <TableCell>Type voor linker wand</TableCell>
                  <TableCell>Niet gespecificeerd</TableCell>
                </>
              ) : (
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      <TableCell>Type voor linker wand</TableCell>
                      <TableCell>
                        {frontLeftWallType === 'fixedGlassWall'
                          ? 'Vaste glazen wand'
                          : frontLeftWallType === 'slidingDoor'
                          ? 'Schuifdeur'
                          : 'Verticale zonwering'}
                      </TableCell>
                    </AccordionTrigger>
                    <AccordionContent>
                      {frontLeftWallType === 'awning' ? (
                        <>
                          <TableRow>
                            <TableCell className="font-medium">
                              Materiaal
                            </TableCell>
                            <TableCell>Verticale zonwering</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">
                              Kleur zonwering
                            </TableCell>
                            <TableCell className="capitalize">
                              {verticalAwningColor}
                            </TableCell>
                          </TableRow>
                        </>
                      ) : (
                        <>
                          <TableRow>
                            <TableCell className="font-medium">
                              Materiaal
                            </TableCell>
                            <TableCell>Glass</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">
                              Transparantie
                            </TableCell>
                            <TableCell className="capitalize">
                              {frontLeftMaterialTransparency}
                            </TableCell>
                          </TableRow>
                        </>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              )}
            </TableRow>
          )}
          {!(width <= 607) && (
            <TableRow>
              {frontRightWallType === 'notSpecified' ? (
                <>
                  <TableCell>Type voor rechter wand</TableCell>
                  <TableCell>Niet gespecificeerd</TableCell>
                </>
              ) : (
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      <TableCell>Type voor rechter wand</TableCell>
                      <TableCell>
                        {frontRightWallType === 'fixedGlassWall'
                          ? 'Vaste glazen wand'
                          : frontRightWallType === 'slidingDoor'
                          ? 'Schuifdeur'
                          : 'Verticale zonwering'}
                      </TableCell>
                    </AccordionTrigger>
                    <AccordionContent>
                      {frontRightWallType === 'awning' ? (
                        <>
                          <TableRow>
                            <TableCell className="font-medium">
                              Materiaal
                            </TableCell>
                            <TableCell>Verticale zonwering</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">
                              Kleur zonwering
                            </TableCell>
                            <TableCell className="capitalize">
                              {verticalAwningColor}
                            </TableCell>
                          </TableRow>
                        </>
                      ) : (
                        <>
                          <TableRow>
                            <TableCell className="font-medium">
                              Materiaal
                            </TableCell>
                            <TableCell>Glass</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">
                              Transparantie
                            </TableCell>
                            <TableCell className="capitalize">
                              {frontRightMaterialTransparency}
                            </TableCell>
                          </TableRow>
                        </>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              )}
            </TableRow>
          )}
          <TableRow>
            {rightWallType === 'notSpecified' ? (
              <>
                <TableCell>Type rechter wand</TableCell>
                <TableCell>Niet gespecificeerd</TableCell>
              </>
            ) : (
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <TableCell>Type rechter wand</TableCell>
                    <TableCell>
                      {rightWallType === 'fixedGlassWall'
                        ? 'Vaste glazen wand'
                        : rightWallType === 'slidingDoor'
                        ? 'Schuifdeur'
                        : rightWallType === 'aluminium'
                        ? 'Aluminium Wand'
                        : rightWallType === 'polycarbonate'
                        ? 'Polycarbonaat Wand'
                        : 'Vrom'}
                    </TableCell>
                  </AccordionTrigger>
                  <AccordionContent>
                    {(rightWallType === 'wedge' ||
                      rightWallType === 'fixedGlassWall' ||
                      rightWallType === 'slidingDoor') && (
                      <>
                        <TableRow>
                          <TableCell className="font-medium">
                            Materiaal
                          </TableCell>
                          <TableCell>{rightWallMaterial}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">
                            Transparantie
                          </TableCell>
                          <TableCell className="capitalize">
                            {rightMaterialTransparency}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Zonwering</TableCell>
                          <TableCell>{rightAwning ? 'Yes' : 'No'}</TableCell>
                        </TableRow>
                        {rightAwning && (
                          <TableRow>
                            <TableCell className="font-medium">
                              Kleur zonwering
                            </TableCell>
                            <TableCell className="capitalize">
                              {rightAwningColor}
                            </TableCell>
                          </TableRow>
                        )}
                      </>
                    )}
                    {(rightWallType === 'aluminium' ||
                      rightWallType === 'polycarbonate') && (
                      <>
                        <TableRow>
                          <TableCell className="font-medium">
                            Materiaal
                          </TableCell>
                          <TableCell>
                            {rightWallType === 'aluminium'
                              ? 'Aluminium'
                              : 'Polycarbonaat'}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Vrom</TableCell>
                          <TableCell>
                            {rightWedgeMaterial ? 'Yes' : 'No'}
                          </TableCell>
                        </TableRow>
                        {rightWedgeMaterial && (
                          <>
                            <TableRow>
                              <TableCell className="font-medium">
                              Vrom Materiaal
                              </TableCell>
                              <TableCell>{rightWallMaterial}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">
                                Transparantie
                              </TableCell>
                              <TableCell className="capitalize">
                                {rightMaterialTransparency}
                              </TableCell>
                            </TableRow>
                          </>
                        )}

                        <TableRow>
                          <TableCell className="font-medium">Zonwering</TableCell>
                          <TableCell>{rightAwning ? 'Yes' : 'No'}</TableCell>
                        </TableRow>
                        {rightAwning && (
                          <TableRow>
                            <TableCell className="font-medium">
                              Kleur zonwering
                            </TableCell>
                            <TableCell className="capitalize">
                              {rightAwningColor}
                            </TableCell>
                          </TableRow>
                        )}
                      </>
                    )}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            )}
          </TableRow>
          {/* <TableRow>
            <TableCell className="font-medium">Lighting</TableCell>
            <TableCell>{ledSet ? 'Led Set' : 'Not Specified'}</TableCell>
          </TableRow> */}
        </TableBody>
      </Table>
    </div>
  );
}
