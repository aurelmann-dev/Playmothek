<?php

namespace App\Controller;


use App\Entity\Images;
use App\Form\EditProfilType;
use App\Form\PageUserEditType;
use App\Repository\PagesRepository;
use App\Repository\UsersRepository;
use App\Repository\ImagesRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Csrf\CsrfToken;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Security\Core\Exception\InvalidCsrfTokenException;

/**
 * Require ROLE_KOLLECTOR for all the actions of this controller
 *
 * @IsGranted("ROLE_KOLLECTOR")
 */
class KollectorsController extends AbstractController
{
    // ~Page kollector  connected~
    #[Route('/kollector/page/{id}', name: 'app_kollector_connected', methods: ['GET', 'POST'])]
    public function userConnected(UsersRepository $usersRepository, $id, pagesRepository $pagesRepository): Response
    {
        $user = $this->getUser();
        $id = $user->getId();
        $page = $pagesRepository->findOneBy(['user' => $id]);

        return $this->render('users/profil/show_kollector_connected.html.twig', [
            'users' => $usersRepository->findAll(),
        ]);
        // ~Kollector connected => view MyPage = ok~
    }

    // ~Edit Profil user connected~
    #[Route('/kollector/profil/edit/{id}', name: 'app_profil_edit', methods: ['GET', 'POST'])]
    public function editProfil(Request $request, ManagerRegistry  $doctrine, $id): Response
    {
        $user  = $this->getUser();
        $id = $user->getId();

        $form = $this->createForm(EditProfilType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $doctrine->getManager();
            $em->persist($user);
            $em->flush();

            $this->addFlash('update_profil', 'Profil mis à jour !');
            return $this->redirectToRoute('app_kollector_connected',  ['id' => $id]);
        }

        return $this->renderForm('users/profil/edit_kollector_connected.html.twig', [
            'form' => $form,
        ]);
        // ~Kollector connected => Edit MyPage info perso = ok~
    }


    // ~Edit Actuality Profil user connected~
    #[Route('/kollector/edit/actuality/{page}', name: 'app_actu_edit', methods: ['GET', 'POST'])]
    public function editActuality(Request $request, PagesRepository $pagesRepository, $page)
    {
        $user  = $this->getUser();
        $id = $user->getId();
        $page = $user->getPage();

        // dd($page);

        $form = $this->createForm(PageUserEditType::class, $page);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            // ~Img~
            $images = $form->get('images')->getData();
            foreach ($images as $image) {
                $fichier = md5(uniqid()) . '.' . $image->getExtension();
                $image->move(
                    $this->getParameter('images_directory'),
                    $fichier
                );
                $img = new Images();
                $img->setTitle($fichier);
                $page->addImage($img);
            }

            $pagesRepository->add($page, true);

            $this->addFlash('update_profil', 'Profil mis à jour !');
            return $this->redirectToRoute('app_kollector_connected',  ['id' => $id]);
            // return $this->redirectToRoute('app_home');
        }

        return $this->renderForm('users/profil/edit_actu_kollector_connected.html.twig', [
            'form' => $form,
        ]);
        // ~Kollector connected => Edit MyPage info page = ok~
    }


    // ~Edit Password user connected~
    #[Route('/kollector/password/edit/{id}', name: 'app_password_edit', methods: ['GET', 'POST'])]
    public function editPasswordl(Request $request, ManagerRegistry  $doctrine, UserPasswordHasherInterface $passwordEncoder): Response
    {
        $user  = $this->getUser();
        $id = $user->getId();

        //~checkmethod post~
        if ($request->isMethod('POST')) {
            $em = $doctrine->getManager();

            //~check two password identical~
            if ($request->request->get('newpass') == $request->request->get('newpass2')) {

                //~stock & hash new password~
                $user->setPassword($passwordEncoder->hashPassword($user, $request->request->get('newpass')));
                $em->flush();

                $this->addFlash('password_success', 'Mot de mot mis à jour avec succés !');

                return $this->redirectToRoute('app_kollector_connected',  ['id' => $id]);
            } else {
                $this->addFlash('password_error', 'Les deux mots de passe ne sont pas identiques.');
            }
        }

        return $this->renderForm('users/profil/edit_pass.html.twig', []);
        // ~Kollector connected => edit password = ok~
    }

    // ~Delete image MyPage Kollector connected~
    #[Route('/kollector/delete/{id}', name: 'app_kollector_connected_delete_img')]
    public function deleteImage(Request $request, Images $image, ImagesRepository $imagesRepository): Response
    {
        $csrfToken = $request->request->get('token');
        
        if ($this->isCsrfTokenValid('delete-image', $csrfToken)) {
            $imagesRepository->remove($image, true);
            // message a faire
            return $this->redirectToRoute('app_home');
        }
    }
      // ~Kollector connected => MyPage delete image = ok~
}

  
